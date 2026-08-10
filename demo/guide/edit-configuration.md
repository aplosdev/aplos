---
layout: helpful
title: Editing Configuration
---

# Editing Configuration

Customize the site in `.steno/config.yml`. Site-wide fields live at the top
level and Aplós options live under `themeConfig`.

## Customizing the Theme

### Navigation Island

Configure the floating navigation island with `themeConfig.nav`:

```yaml
themeConfig:
  nav:
    title: My Custom Title
    git: https://github.com/you/repository
    rss: /feed.xml
    links:
      - { title: Link 1, url: /one/ }
      - { title: Link 2, url: /two/ }
```

Set `show: false` to hide the navigation island.

### Footer {#footer-config}

The footer supports copyright, credits, licensing, source-code, and custom
links:

```yaml
themeConfig:
  footer:
    startYear: "2024"
    copyright: true
    poweredBy: true
    message: Built with Steno.
    madeby:
      show: true
      name: Mr Example
      link: https://example.org
    copyleft:
      show: true
      license: MIT License
      info: https://github.com/you/repository/blob/main/LICENSE
    sourcecode:
      show: true
      link: https://github.com/you/repository
    links:
      - { title: RSS, url: /feed.xml }
```

### Articles

Article pages can show authors, a closing message, reading time, tags, and
previous/next links:

```yaml
themeConfig:
  articles:
    authors: true
    message: Thanks for reading this article.
```

For page-specific navigation, use objects in frontmatter:

```yaml
prev: { url: /posts/previous/, title: Previous post }
next: { url: /posts/next/, title: Next post }
```

### Theme Settings

```yaml
themeConfig:
  links: icons
  numericHeadings: true
  minimal: false
  webFonts: true
```

- `links: icons` adds arrows to internal and external links.
- `numericHeadings` numbers headings site-wide. A page can instead set
  `style: numeric`.
- `minimal` suppresses the special article header and footer.
- `webFonts: false` uses system fonts without an external font request.

## Customizing Colors

Set the accent directly; the theme derives its light and dark palette from it.
`accentDark` is an optional dark-mode override.

```yaml
themeConfig:
  accent: "#55B458"
  accentDark: "#86d58a"
```

## Markdown Configuration

Steno renders CommonMark/GFM Markdown, fenced code blocks, tables, task lists,
and raw HTML. Aplós also converts GitHub-style admonitions:

```md
> [!TIP] Tip This is a helpful tip.
```

Use ordinary HTML for collapsible details:

```html
<details class="details">
  <summary>Heads up</summary>
  <p>Additional information.</p>
</details>
```

## General Website Configuration

The core Steno settings sit at the top level:

```yaml
title: My Site
description: A concise site description.
author: Mr Example
contentDir: content
output: dist
publicDir: public
shortUrls: true
theme: jsr:@steno/theme-aplos
```

Place static files such as `favicon.svg`, `robots.txt`, and social images in
`content/public`; Steno copies them to the output root. Use `head` entries in
the Steno config for additional metadata.

```yaml
head:
  - { tag: meta, name: theme-color, content: "#55B458" }
  - { tag: link, rel: icon, href: /favicon.svg }
```
