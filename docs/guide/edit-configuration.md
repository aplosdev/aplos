---
layout: helpful
---

# Editing Configuration

If you want to customize the configuration of the project, you can follow the long list of what can you customize below. All of these are located in the `config.mts` file.

## Customizing the Theme

To customize the theme, you can change the following variables inside the `themeConfig` object in the `config.mts` file:

### Navigation Island

You can change multiple things in the navigation island:

Customizing the navigation links in your Aplós template is a straightforward process, specifically in the `nav` section:

```ts
nav: {
    links: [
        { text: "Link 1", url: "/1" },
        { text: "Link 2", url: "/2" },
        { text: "Link 3", url: "/3" },
        // ...
      ],
      git: "https://gitsomething.example/You/YourRepo", // The Link to your Git repo
      rss: "/atom.xml", // The Link to your RSS feed
    },
```

#### Title

With version `2.4.0`, it's possible to have a custom title in the navigation island, rather then site's title. To change the title, you can change the following variables inside the `nav` object:

```ts
    nav: {
      title: "My Custom Title",
    },
```

### Footer {#footer-config}

Customizing the Footer in your Aplós template is a straightforward process, specifically in the `footer` section:

```ts
    footer: {
      copyright: true, // Show the copyright
      poweredBy: true, // Show the "Powered by Aplós & VitePress" text

      madeby: { // The "Made by" section, like " Made with ❤️ by Mr Example" (Inside Footer Links)
        show: false, // Show the "Made by" section
        name: "Mr Example", // Your name
        link: "https://example.org", // Your website
      },

      copyleft: { // The "Copyleft" section
        show: true, // Show the "Copyleft" section
        license: "MIT License", // The license you are using
        info: "https://github.com/You/YourRepo/blob/main/LICENSE", // The link to the license
      },

      sourcecode: { // The "Source Code" section
        show: true, // Show the "Source Code" section
        link: "https://github.com/You/YourRepo", // The link to your source code
    },
  },
```

#### Footer Links

You can change the footer links by changing the `footer` -> `links` array:

```ts
    footer: {
      links: [
        { text: "Link 1", url: "/1" },
        { text: "Link 2", url: "/2" },
        { text: "Link 3", url: "/3" },
        // ...
      ],
    },
```

### Articles

Customizing the Articles in your Aplós template is a straightforward process, specifically in the `articles` section, for example configuring the Giscus comments:

```ts
    articles: {
      message: "Thanks for reading this article",
      giscus: {
        repo: "Foo/Bar",
        repoid: "ExaMpLe",
        categoryid: "Exa_MPle",
      },
    },
```

> [!WARNING] Warning
> Make sure to replace the `repo`, `repoid`, and `categoryid` with your own values.

The `giscus` object contains the variables to make the [Giscus](https://giscus.app/) comments show, for more information check the [Giscus documentation](https://giscus.app/).

> [!INFO] Info
> The variables above are only needed if you use Giscus as the comment provider in your articles. If you use ActivityPub, you can ignore these variables.

#### Message after the article

You can change the message that appears after the article by changing the `message` variable inside the `articles` object:

```ts
    articles: {
      message: "Thanks for reading this article",
    },
```

### Changing theme settings

With version `2.0.0`, you can now configure more settings for the theme. For example, if you want headings to have numbers, you can change the following variables inside the `theme` object:

```ts
    theme: {
      style: "numeric", // The style of the headings
    },
```

Or if you want to have a simple page, without articles and a minimal theme, you can change the following variables inside the `theme` object:

```ts
    theme: {
      minimal: true, // The layout of the page
    },
```

### Plain Theme

If you want the theme to have no custom fonts, you can change the import if the theme to `aplos/plain`:

```ts
import type { Theme } from "vitepress";
import Aplos from "aplos/Layout.vue";
import "./custom.scss";
import "aplos/plain";

export default {
  Layout: Aplos,
} satisfies Theme;
```

## Customizing Colors

To customize the accent color, you can change the following variables inside the `vite` -> `css` -> `preprocessorOptions` -> `scss` -> `additionalData`:

```ts{6}
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $color-accent: !!YOUR_COLOR_HEX!!;
          `,
        },
      },
    },
  },
```

Replace `!!YOUR_COLOR_HEX!!` with your desired color hex code.

## Markdown Configuration

To customize the markdown configuration, you can change the following variables inside the `markdown` object in the `config.mts` file:

```ts
  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
```

VitePress uses [Shiki](https://github.com/shikijs/shiki) to highlight language syntax in Markdown code blocks. Shiki provides [a long list of themes](https://shiki.style/themes) from which you can choose the one that fits the best your project. To change the theme, add the following variables (also inside the `markdown` object):

```ts
    theme: {
      light: "light-plus",
      dark: "dark-plus",
    },
```

For more information on how to customize the markdown configuration, you can check the [VitePress documentation](https://vitepress.dev/reference/site-config#markdown).

## General Website Configuration

To customize the general website configuration, you can change the following variables inside the `head` object like on an normal HTML Webpage, here is an example:

```ts
  head: [
    ["meta", { name: "author", content: "Mr. Example" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#1a2b3c" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    [
      "meta",
      {
        name: "og:description",
        content: "Someone and a great example.",
      },
    ],
    ["meta", { name: "og:site_name", content: "User | Example" }],
    ["meta", { name: "twitter:title", content: "User | Example" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Someone and a great example.",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://example.org" }],
  ],
```

For more information on how to customize the general website configuration, you can check the [VitePress documentation](https://vitepress.dev/reference/site-config#overview).

### Sitemap

To customize the sitemap, you can change the following variables inside the `sitemap` object in the `config.mts` file:

```ts
  sitemap: {
    hostname: "https://example.org",
  },
```
