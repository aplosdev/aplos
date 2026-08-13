# @gabs/aplos

Aplós for [Steno](https://steno.gxbs.dev/): a polished, responsive theme for
documentation, blogs, and personal sites.

## Start in two minutes

Create a Steno project:

```sh
deno create jsr:@steno/init
```

Choose Aplós when prompted, or set one line in `content/.steno/config.yml`:

```yaml
theme: jsr:@gabs/aplos
```

Then run:

```sh
deno task dev
```

That is enough for a complete site. Add Markdown files to `content/`; folders
become routes and `index.md` becomes the folder homepage.

## A practical configuration

Everything is optional except Steno's normal site metadata:

```yaml
title: My Site
description: Notes, guides, and articles
author: Ada Lovelace
contentDir: content
output: dist
shortUrls: true
theme: jsr:@gabs/aplos

themeConfig:
  accent: "#55b458"
  links: icons
  nav:
    links:
      - { title: Guide, url: /guide/ }
      - { title: Blog, url: /blog/ }
    git: https://github.com/example/example
  footer:
    startYear: "2026"
    sourcecode:
      show: true
      link: https://github.com/example/example
```

Start small. Add configuration only when you need to change a default.

## Write pages

An ordinary page is ordinary Markdown—frontmatter is optional:

```md
# Hello

This page is ready to publish.
```

Use `layout: helpful` to add “go to top” and issue links:

```yaml
---
title: Installation
layout: helpful
---
```

### Articles

Create `content/posts/hello.md`:

```yaml
---
layout: article
title: Hello, Steno
description: My first article.
date: 2026-08-10
author: [Ada Lovelace]
tags: [steno, notes]
---
```

Register the collection once:

```yaml
collections:
  posts:
    sortBy: date
    order: desc
```

Then create a listing page with `layout: articles`. Aplós supplies filtering,
dates, and tags automatically.

Previous and next links are explicit and predictable:

```yaml
prev: { url: /posts/previous/, title: Previous post }
next: { url: /posts/next/, title: Next post }
```

## Useful options

| Option                  | What it changes                            |
| ----------------------- | ------------------------------------------ |
| `accent`                | Derives the light and dark color palette   |
| `accentDark`            | Optionally overrides the dark-mode accent  |
| `links: icons`          | Adds arrows to internal and external links |
| `numericHeadings: true` | Numbers headings site-wide                 |
| `minimal: true`         | Hides article-specific chrome              |
| `webFonts: false`       | Uses system fonts with no font request     |
| `nav.show: false`       | Hides the floating navigation island       |

`nav.title` falls back to the site title. `nav.rss` and `nav.git` add icon
links. Footer configuration supports links, copyright, attribution, license,
source code, and a short message.

## Markdown extras

GitHub-style admonitions work without a plugin:

```md
> [!TIP] Tip Keep the configuration small.
```

Images support Aplós modifiers in the URL hash:

```md
![Screenshot](/screenshot.png#small#shadow)
```

Available modifiers include `small`, `medium`, `full`, `shadow`, `mono`,
`invert`, `sepia`, `blur`, `pixel`, `static`, `not-rounded`, `start`, `end`,
`transparency`, and `no-border`.

The table of contents is generated automatically from `h2`–`h6` headings. You
can supply an explicit `toc` array in frontmatter when you need custom labels or
ordering.

## Icons

Aplós includes a small self-hosted bold subset of
[Phosphor Icons](https://phosphoricons.com/) for navigation, links, callouts,
articles, and theme actions. Icons inherit the surrounding text color and need
no font, script, package installation, or CDN request. The bundled Phosphor
assets are MIT licensed.

## Layouts

- `layout` — normal pages; this is the default.
- `helpful` — normal content plus helpful actions.
- `article` — article metadata, reading time, tags, and previous/next links.
- `articles` — filterable listing from `collections.posts`.
- `notfound` — Aplós 404 page; use it in `content/404.md`.

## Develop the theme

The five layouts share `ShellStart` and `ShellEnd`, so document structure,
assets, navigation, TOC, and footer are maintained once. Sass is split by
responsibility and compiled when Steno loads the theme.

```sh
deno task dev      # live fixture
deno task check    # fmt, lint, types, build, doctor
```

The demo under [`demo/`](demo/) is the complete Aplós documentation site and
exercises every supported layout.

## License

MIT. Ported from [aplosdev/aplos](https://github.com/aplosdev/aplos), copyright
2024–present Gabriel Cozma. See [third-party licenses](THIRD_PARTY_LICENSES.md)
for the bundled Phosphor icon subset.
