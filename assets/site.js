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

(function () {
  const output = document.querySelector("[data-reading-time]");
  const main = document.querySelector("#content-main");
  if (!output || !main) return;

  const content = main.cloneNode(true);
  content.querySelector("#article-head")?.remove();
  content.querySelector("#article-footer")?.remove();
  const words = (content.textContent || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  output.textContent = Math.max(1, Math.ceil(words / 200)) +
    " min" +
    (words > 200 ? "s" : "") +
    " left";
})();

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
        : main.getBoundingClientRect().top) + scrollY;
    end =
      (footer
        ? footer.getBoundingClientRect().top
        : main.getBoundingClientRect().bottom) + scrollY;
  }

  function update() {
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

(function () {
  const toc = document.querySelector("[data-auto-toc]");
  const main = document.querySelector("#content-main");
  if (!toc || !main) return;

  const headings = Array.from(
    main.querySelectorAll("h2, h3, h4, h5, h6"),
  ).filter((heading) => !heading.closest("#article-footer"));
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

(function () {
  const toggle = document.querySelector("[data-toc-toggle]");
  const toc = document.querySelector(".table-of-contents");
  if (!toggle || !toc) return;

  if (toc.hidden) {
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
      const targetWidth = Math.min(
        innerWidth * 0.9,
        416,
        innerWidth - button.left - 16,
      );

      setBox(button);
      toc.classList.remove("sliding-away");
      toc.classList.add("open");
      toggle.classList.add("morphed");

      const targetHeight = measureExpandedHeight(targetWidth);
      setBox(button);
      void toc.offsetHeight;

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
      toc.classList.remove("open");
      toggle.classList.remove("morphed");
      toc.classList.add("sliding-away");

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

(function () {
  if (!navigator.clipboard) return;

  for (const pre of document.querySelectorAll("pre")) {
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
