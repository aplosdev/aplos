/**
 * This module exports the Aplós theme for Steno, ported from the Aplós
 * VitePress theme (https://aplos.gxbs.dev/).
 *
 * @module
 */

import type { StenoTheme } from "@steno/steno";
import pluginShiki from "plugin-shiki";
import { compileFromUrls } from "plugin-scss";

// fetch() works universally: file:// for local/bundled imports, https://
// for direct JSR imports (jsr:@steno/theme-aplos@x.y.z).
async function readLocal(path: string): Promise<string> {
  return await fetch(new URL(path, import.meta.url)).then((r) => r.text());
}

async function loadTemplates(
  directory: string,
  templates: Record<string, string>,
): Promise<Record<string, string>> {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(templates).map(async ([name, file]) => [
        name,
        await readLocal(`./${directory}/${file}.tau`),
      ]),
    ),
  );
}

const layouts = await loadTemplates("layouts", {
  layout: "layout",
  article: "article",
  articles: "articles",
  helpful: "helpful",
  notfound: "notfound",
});

const components = await loadTemplates("components", {
  Footer: "footer",
  Head: "head",
  Helpful: "helpful",
  Nav: "nav",
  ShellEnd: "shell-end",
  ShellStart: "shell-start",
  Toc: "toc",
});

// Compiled once at theme-load time; ordered to match assets/style.scss.
const style = await compileFromUrls(
  import.meta.url,
  [
    "colors",
    "base",
    "icons",
    "navigation",
    "content",
    "components",
    "home",
    "responsive",
    "article",
    "notfound",
    "collections",
  ].map((name) => `./assets/scss/_${name}.scss`),
);
const site = await readLocal("./assets/site.js");

const aplosMarkdown = {
  name: "aplos-markdown",
  transformHtml(html: string): string {
    return html.replace(
      /<blockquote>\s*<p>\[!(INFO|TIP|NOTE|WARNING|DANGER)\](?:[ \t]+(?:Info|Tip|Note|Warning|Danger))?[ \t]*\n?([\s\S]*?)<\/blockquote>/g,
      (_match, kind: string, body: string) => {
        const title = kind.charAt(0) + kind.slice(1).toLowerCase();
        const content = body.replace(/^\s*/, "");
        const wrapped = content.startsWith("<") ? content : `<p>${content}`;
        return `<div class="${kind.toLowerCase()}"><p class="custom-block-title">${title}</p>${wrapped}</div>`;
      },
    );
  },
};

const linkListSchema = {
  type: "array" as const,
  items: {
    type: "object" as const,
    properties: {
      title: { type: "string" as const },
      text: { type: "string" as const },
      url: { type: "string" as const },
      link: { type: "string" as const },
    },
  },
};

/** Aplós theme, ported to Steno. */
const theme: StenoTheme = {
  name: "aplos",
  version: "0.3.0",
  layouts,
  components,
  assets: {
    "style.css": style,
    "site.js": site,
  },
  plugins: [aplosMarkdown, pluginShiki()],
  defaultConfig: {
    author: "",
    currentYear: new Date().getFullYear(),
    locale: "en-US",
    nav: { show: true },
    articles: { authors: true },
    footer: {
      copyright: true,
      poweredBy: true,
    },
  },
  configSchema: {
    accent: { type: "string", description: "Light-mode accent color" },
    accentDark: { type: "string", description: "Dark-mode accent color" },
    author: { type: "string", default: "" },
    locale: { type: "string", default: "en-US" },
    currentYear: { type: "integer" },
    links: { type: "string", enum: ["default", "icons"], default: "default" },
    minimal: { type: "boolean", default: false },
    numericHeadings: { type: "boolean", default: false },
    webFonts: {
      type: "boolean",
      default: true,
      description:
        "Load Inter/Geist Mono from Google Fonts. " +
        "Set false to use the system font stack only, no network request.",
    },
    nav: {
      type: "object",
      properties: {
        show: { type: "boolean", default: true },
        title: { type: "string" },
        rss: { type: "string" },
        git: { type: "string" },
        links: linkListSchema,
      },
    },
    social: {
      type: "object",
      properties: {
        image: { type: "string" },
        twitterCard: {
          type: "string",
          enum: ["summary", "summary_large_image"],
          default: "summary_large_image",
        },
      },
    },
    articles: {
      type: "object",
      properties: {
        authors: { type: "boolean", default: true },
        message: { type: "string" },
      },
    },
    footer: {
      type: "object",
      properties: {
        startYear: { type: "string" },
        message: { type: "string" },
        copyright: { type: "boolean", default: true },
        customCopyright: { type: "string" },
        custom: {
          type: "object",
          properties: {
            copyright: { type: "string" },
          },
        },
        poweredBy: { type: "boolean", default: true },
        madeby: {
          type: "object",
          properties: {
            show: { type: "boolean", default: false },
            name: { type: "string" },
            link: { type: "string" },
          },
        },
        copyleft: {
          type: "object",
          properties: {
            show: { type: "boolean", default: false },
            license: { type: "string" },
            info: { type: "string" },
          },
        },
        sourcecode: {
          type: "object",
          properties: {
            show: { type: "boolean", default: false },
            link: { type: "string" },
          },
        },
        links: linkListSchema,
      },
    },
  },
};

export default theme;
