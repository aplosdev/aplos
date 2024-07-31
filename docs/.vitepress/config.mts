import { defineConfig } from "vitepress";
import { figure } from "@mdit/plugin-figure";
import { tasklist } from "@mdit/plugin-tasklist";

const info = {
  title: "Aplós",
  description:
    "A sleek, contemporary, and purposefully designed theme and template",
  accentColor: "#55B458",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: info.title,
  description: info.description,
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    links: "icons",
    locale: "en-GB",
    author: "Gabriel Cozma",

    articles: {
      giscus: {
        repo: "aplosdev/aplos",
        repoid: "R_kgDOLYNrKA",
        categoryid: "DIC_kwDOLYNrKM4Cghru",
        category: "Article Comments Demo",
        mapping: "title",
        theme: "preferred_color_scheme",
      },
    },
    nav: {
      links: [
        { url: "/demo/", text: "Demo" },
        { url: "/boosts/", text: "Boosts" },
        { url: "/guide/", text: "Guide" },
      ],
      git: "https://github.com/aplosdev/aplos",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      links: [{ url: "/static", text: "Static" }],

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me/",
      },

      copyleft: {
        show: true,
        license: "MIT License",
        info: "https://github.com/aplosdev/aplos?tab=MIT-1-ov-file#readme",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/aplosdev/aplos",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "Warning",
      tipLabel: "Tip",
      dangerLabel: "Danger",
      infoLabel: "Info",
    },
    theme: {
      light: "light-plus",
      dark: "vitesse-dark",
    },

    config: (md) => {
      md.use(figure);
      md.use(tasklist, {
        disabled: false,
        label: true,
        containerClass: "task-list-container",
        itemClass: "task-list-item",
        labelClass: "task-list",
      });
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["link", { rel: "icon", href: "/icon.svg" }],
    ["meta", { name: "theme-color", content: info.accentColor }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: info.title }],
    [
      "meta",
      {
        name: "og:image",
        content: "https://aplos.gxbs.me/images/banner.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://aplos.gxbs.me/images/banner.png",
      },
    ],
    ["meta", { name: "twitter:title", content: info.title }],
    [
      "meta",
      {
        name: "twitter:description",
        content: info.description,
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aplos.gxbs.me" }],
  ],
  sitemap: {
    hostname: "https://aplos.gxbs.me",
  },
  vite: {
    ssr: {
      noExternal: ["vitepress-plugin-testcomponents"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $color-accent: ${info.accentColor};
            $bg-color-code-l: #ffffff;
            `,
        },
      },
    },
  },
});
