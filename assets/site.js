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
    if (target === currentPath) link.classList.add("active");
  }

  let lastScrollY = scrollY;
  let ticking = false;

  function onScroll() {
    const currentScrollY = scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 40) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("hidden");
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
  const words = (content.textContent || "").trim().split(/\s+/).filter(Boolean)
    .length;
  output.textContent = "· " + Math.max(1, Math.ceil(words / 200)) +
    " minute" + (words > 200 ? "s" : "") + " to read";
})();

// Generate a TOC when a page did not provide one. Explicit frontmatter TOCs
// still win, while ordinary Markdown headings receive stable slug-like IDs.
(function () {
  const toc = document.querySelector("[data-auto-toc]");
  const main = document.querySelector("#content-main");
  if (!toc || !main) return;

  const headings = Array.from(main.querySelectorAll("h2, h3, h4, h5, h6"))
    .filter((heading) => !heading.closest("#article-footer"));
  if (headings.length === 0) return;

  const used = new Set();
  const list = toc.querySelector("ul");
  for (const heading of headings) {
    const base = heading.id || (heading.textContent || "section")
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
