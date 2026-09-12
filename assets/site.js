// Size the TOC-toggle pill to exactly match the main nav pill's height,
// width locked 1:1 to that (a perfect circle). Tried CSS-only first
// (`.nav-pill-toc`'s `aspect-ratio: 1` + the header's default flex
// `align-items: stretch`, plus `min-width: 0` to rule out the usual
// flex-item automatic-minimum-size culprit) - height picks up the stretch
// correctly, but width still falls back to content-based sizing instead of
// following the ratio. That combination just isn't supported reliably, so
// this is a real measurement instead. Re-runs on resize since nav height
// can change with viewport (see _responsive.scss's font-size overrides).
(function () {
  const toggle = document.querySelector(".nav-pill-toc");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  function sync() {
    const size = nav.getBoundingClientRect().height + "px";
    toggle.style.width = size;
    toggle.style.height = size;
  }

  sync();
  addEventListener("resize", sync);
})();

// Small progressive enhancements shared by every layout: active navigation,
// scroll behavior, dates, reading time, TOC, article filters, and audio.
(function () {
  document.querySelectorAll("[data-pronunciation]").forEach((button) => {
    button.addEventListener("click", () => {
      const source = button.getAttribute("data-pronunciation");
      if (source) new Audio(source).play();
    });
  });

  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  const currentPath = location.pathname.replace(/index\.html$/, "");
  for (const link of nav.querySelectorAll("li:not(.site-title) a[href]")) {
    const target = new URL(link.href, location.href).pathname.replace(
      /index\.html$/,
      "",
    );
    const isCurrent = target === currentPath;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  let lastScrollY = scrollY;
  let ticking = false;

  // Article pages keep the nav pill visible but compact it (drop the site
  // links) past a small scroll threshold, rather than hiding it entirely -
  // the reading-time/TOC pills next to it stay put throughout. Other pages
  // that have a TOC-toggle pill hide it alongside the main pill instead,
  // same slide-up animation as the pill it's sitting next to.
  const isArticle = document.querySelector(".nav-pill-reading") !== null;
  const tocToggle = isArticle ? null : document.querySelector(".nav-pill-toc");

  function onScroll() {
    const currentScrollY = scrollY;
    if (isArticle) {
      nav.classList.toggle("links-collapsed", currentScrollY > 10);
    } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
      nav.classList.add("hidden");
      if (tocToggle && !tocToggle.classList.contains("hidden")) {
        tocToggle.classList.add("hidden");
        // Tell the TOC panel (if open) to leave the same way the button
        // just did, instead of shrinking back into a button that's
        // simultaneously sliding off-screen underneath it.
        tocToggle.dispatchEvent(new Event("navhide"));
      }
    } else {
      nav.classList.remove("hidden");
      tocToggle?.classList.remove("hidden");
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();

// Format dates using Aplos's locale option. The server-rendered Tau date stays
// as a no-JavaScript fallback.
(function () {
  const locale = document.documentElement.lang || "en-US";
  for (const time of document.querySelectorAll("time[data-localize-date]")) {
    const date = new Date(time.dateTime);
    if (Number.isNaN(date.valueOf())) continue;
    const options = time.hasAttribute("data-date-time")
      ? { dateStyle: "long", timeStyle: "short" }
      : { dateStyle: "long" };
    time.textContent = new Intl.DateTimeFormat(locale, options).format(date);
  }
})();

// Ported from ArticleHead.vue. This stays client-side because Tau deliberately
// exposes no arbitrary word-count expression helpers.
(function () {
  const output = document.querySelector("[data-reading-time]");
  const main = document.querySelector("#content-main");
  if (!output || !main) return;

  const content = main.cloneNode(true);
  content.querySelector("#article-head")?.remove();
  content.querySelector("#article-footer")?.remove();
  const words =
    (content.textContent || "").trim().split(/\s+/).filter(Boolean).length;
  output.textContent = Math.max(1, Math.ceil(words / 200)) + " min" +
    (words > 200 ? "s" : "") + " left";
})();

// Reading-progress ring: fills based on how far the reader has scrolled
// through the article body specifically (between the head and the
// prev/next footer), not the whole page - those don't count as "reading".
// Lives inside the "x mins left" pill in place of a static clock icon.
(function () {
  const ring = document.querySelector("[data-reading-progress]");
  const main = document.querySelector("#content-main");
  if (!ring || !main) return;

  const head = document.querySelector("#article-head");
  const footer = document.querySelector("#article-footer");

  let start = 0;
  let end = 0;

  function measure() {
    start =
      (head
        ? head.getBoundingClientRect().bottom
        : main.getBoundingClientRect().top) +
      scrollY;
    end =
      (footer
        ? footer.getBoundingClientRect().top
        : main.getBoundingClientRect().bottom) +
      scrollY;
  }

  function update() {
    // 0% when the body's top edge reaches the top of the viewport, 100%
    // once its bottom edge has scrolled up to the bottom of the viewport.
    const range = Math.max(end - innerHeight - start, 1);
    const progress = Math.min(Math.max((scrollY - start) / range, 0), 1);
    ring.style.setProperty("--progress", progress * 100);
  }

  measure();
  update();

  let ticking = false;
  addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  addEventListener("resize", function () {
    measure();
    update();
  });
})();

// Generate a TOC when a page did not provide one. Explicit frontmatter TOCs
// still win, while ordinary Markdown headings receive stable slug-like IDs.
(function () {
  const toc = document.querySelector("[data-auto-toc]");
  const main = document.querySelector("#content-main");
  if (!toc || !main) return;

  const headings = Array.from(main.querySelectorAll("h2, h3, h4, h5, h6"))
    .filter(
      (heading) => !heading.closest("#article-footer"),
    );
  if (headings.length === 0) return;

  const used = new Set();
  const list = toc.querySelector("ul");
  for (const heading of headings) {
    const base = heading.id ||
      (heading.textContent || "section")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") ||
      "section";
    let id = base;
    let suffix = 2;
    while (used.has(id) || (document.getElementById(id) && heading.id !== id)) {
      id = base + "-" + suffix++;
    }
    heading.id = id;
    used.add(id);

    const item = document.createElement("li");
    item.className = "toc-level-" + heading.tagName.slice(1);
    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = heading.textContent;
    item.append(link);
    list.append(item);
  }
  toc.hidden = false;
})();

// TOC-toggle pill: the panel is a literal container-transform of the button
// itself - it starts as an exact copy of the button's box (position, size,
// round corners) and grows into the full list from there, right edge and
// top edge held fixed so it reads as "the button expanded downward", not a
// separate panel appearing elsewhere. Closes (and shrinks back into the
// button) on outside click, Escape, picking a link, or scrolling. Runs
// after the auto-TOC block above so `toc.hidden` and its list are settled.
(function () {
  const toggle = document.querySelector("[data-toc-toggle]");
  const toc = document.querySelector(".table-of-contents");
  if (!toggle || !toc) return;

  if (toc.hidden) {
    // No frontmatter TOC and no headings were found - nothing to open.
    toggle.hidden = true;
    return;
  }

  let open = false;

  function buttonBox() {
    const rect = toggle.getBoundingClientRect();
    const radius = getComputedStyle(toggle).borderRadius;
    return {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height,
      radius,
    };
  }

  function setBox(box) {
    toc.style.top = box.top + "px";
    toc.style.left = box.left + "px";
    toc.style.width = box.width + "px";
    toc.style.height = box.height + "px";
    toc.style.borderRadius = box.radius;
  }

  // Measures the panel's natural content height at a given width without
  // ever letting it paint at that size: swap it in off-condition
  // (visibility: hidden, no transition), read scrollHeight, then hand
  // control back to the caller to start the real animated state.
  function measureExpandedHeight(width) {
    const prevTransition = toc.style.transition;
    toc.style.transition = "none";
    toc.style.visibility = "hidden";
    toc.style.width = width + "px";
    toc.style.height = "auto";
    toc.style.maxHeight = Math.round(innerHeight * 0.65) + "px";
    const height = toc.scrollHeight;
    toc.style.visibility = "";
    toc.style.transition = prevTransition;
    return Math.min(height, innerHeight * 0.65);
  }

  function cleanup() {
    toc.removeEventListener("transitionend", onTransitionEnd);
    clearTimeout(fallback);
    toc.classList.remove("sliding-away");
    toc.removeAttribute("style");
  }

  function onTransitionEnd(event) {
    if (event.target === toc && event.propertyName === "transform") {
      cleanup();
    }
  }

  let fallback = 0;

  function setOpen(next, slideAway) {
    open = next;
    toggle.setAttribute("aria-expanded", String(open));

    if (open) {
      const button = buttonBox();
      // Growth is left-anchored (the button's left edge stays put, box
      // grows right + down), and the button sits at the row's right end -
      // so clamp width to what actually fits before the viewport edge.
      const targetWidth = Math.min(
        innerWidth * 0.9,
        416,
        innerWidth - button.left - 16,
      );

      // Start as an exact stand-in for the button (still invisible - only
      // `.open`'s opacity makes it appear), so the very first animated
      // frame is already mid-morph rather than popping in.
      setBox(button);
      toc.classList.remove("sliding-away");
      toc.classList.add("open");
      toggle.classList.add("morphed");

      const targetHeight = measureExpandedHeight(targetWidth);
      setBox(button); // measuring above touched top/left/width/height - restore the start box before the real transition begins
      void toc.offsetHeight; // force layout so the start box is committed...

      // ...then write the target box on the *next* frame. A same-tick
      // write can get coalesced with the one above into a single paint
      // (offsetHeight alone doesn't reliably prevent that across browsers),
      // which would skip the animation entirely.
      requestAnimationFrame(function () {
        setBox({
          top: button.top,
          left: button.left,
          width: targetWidth,
          height: targetHeight,
          radius: "1.25rem",
        });
      });
    } else if (slideAway) {
      // The button is sliding off the top of the screen right now (see
      // the "navhide" listener below) - follow it the same way instead of
      // shrinking back into a button that's disappearing underneath it.
      toc.classList.remove("open");
      toggle.classList.remove("morphed");
      toc.classList.add("sliding-away");

      // Clean up only once the *actual* transform transition finishes, not
      // after a guessed delay: a plain `setTimeout` matched to the CSS
      // duration can fire a beat before the transition really completes
      // (layout/paint overhead, tab throttling, etc.), which yanks the
      // panel back to its default (invisible) styles mid-flight - it snaps
      // away instead of visibly sliding. The 900ms timeout is only a
      // fallback in case `transitionend` never fires at all.
      toc.addEventListener("transitionend", onTransitionEnd);
      fallback = setTimeout(cleanup, 900);
    } else {
      const button = buttonBox();
      setBox(button);
      toc.classList.remove("open");
      toggle.classList.remove("morphed");
    }
  }

  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    setOpen(!open);
  });

  toggle.addEventListener("navhide", function () {
    if (open) setOpen(false, true);
  });

  toc.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", function (event) {
    if (open && !toc.contains(event.target) && event.target !== toggle) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && open) setOpen(false);
  });

  // Article pages don't hide the toggle pill on scroll (see the main scroll
  // handler above), so there's no "navhide" to catch there - fall back to
  // a plain close so the panel doesn't linger, stale, under content the
  // user has scrolled past.
  if (document.querySelector(".nav-pill-reading")) {
    addEventListener(
      "scroll",
      function () {
        if (open) setOpen(false);
      },
      { passive: true },
    );
  }
})();

// Table-of-contents scrollspy: highlights the toc link for whichever
// heading is currently nearest the top of the viewport. Only runs if a
// page actually rendered a `.table-of-contents` (see layout.tau's `toc`
// frontmatter block) - most pages won't have one.
(function () {
  const toc = document.querySelector(".table-of-contents");
  if (!toc || !("IntersectionObserver" in globalThis)) return;

  const links = Array.from(toc.querySelectorAll("a[href^='#']"));
  const headings = links
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);
  if (headings.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const link = toc.querySelector('a[href="#' + entry.target.id + '"]');
        if (!link) continue;
        for (const otherLink of links) otherLink.classList.remove("active");
        link.classList.add("active");
      }
    },
    { rootMargin: "0px 0px -80% 0px" },
  );

  for (const heading of headings) observer.observe(heading);
})();

// Copy-to-clipboard button on every fenced code block. Injected client-side
// rather than by the Shiki plugin/Markdown pipeline, since neither knows
// about theme-level UI like this.
(function () {
  if (!navigator.clipboard) return;

  for (const pre of document.querySelectorAll("pre")) {
    // A wrapper (not `pre` itself) hosts the button: `pre` needs its own
    // `overflow: auto` for horizontal code scroll, which would otherwise
    // clip a button positioned to overlap the border.
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.replaceWith(wrapper);
    wrapper.append(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.setAttribute("aria-label", "Copy code");
    button.innerHTML =
      '<span class="ph-icon ph-copy" aria-hidden="true"></span>' +
      '<span class="ph-icon ph-check" aria-hidden="true"></span>';

    button.addEventListener("click", function () {
      navigator.clipboard.writeText(pre.textContent || "").then(function () {
        button.classList.add("copied");
        setTimeout(function () {
          button.classList.remove("copied");
        }, 1500);
      });
    });

    wrapper.append(button);
  }
})();

// Article-list tag filters as a tiny progressive enhancement over collections.
(function () {
  const list = document.querySelector("[data-article-list]");
  const controls = list?.querySelector("[data-tag-filters]");
  if (!list || !controls) return;

  const posts = Array.from(list.querySelectorAll(".post"));
  const tags = new Set();
  for (const post of posts) {
    for (const tag of post.dataset.tags.split("|").filter(Boolean)) {
      tags.add(tag);
    }
  }
  if (tags.size === 0) return;

  for (const tag of ["All", ...Array.from(tags).sort()]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = tag;
    if (tag === "All") button.classList.add("active");
    button.addEventListener("click", function () {
      for (const other of controls.querySelectorAll("button")) {
        other.classList.toggle("active", other === button);
      }
      for (const post of posts) {
        post.hidden = tag !== "All" &&
          !post.dataset.tags.split("|").includes(tag);
      }
    });
    controls.append(button);
  }
})();
