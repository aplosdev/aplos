<div align="center">
<h1>Aplós</h1>
<p>A sleek, contemporary, and purposefully designed theme for Steno</p>
</div>

> [!NOTE]
> Aplós is now a [Steno](https://steno.gxbs.dev/) theme. The VitePress version is archived at [aplosdev/vitepress](https://github.com/aplosdev/vitepress).

![Screenshot of Aplos](https://github.com/GabsEdits/aplos/assets/110247388/3c98f962-b560-442a-9f56-9b805156a272)

## Feautres

- Native Dark Mode
- Mobile-Optimized Layouts
- Minimalist and clean design
- Styled with a primary color theme chosen by the user
- Perfect Typography: Inter for Prose & Geist Mono for Code

## Name

The name "Aplós" is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple'. The name showcases the essence of this theme in the first place; the dedication of trying to humanize the web using streightforward and modern design. Aplós is centered around the philosophy of simplicity, focusing on the content itself, with small great touches all around it.

## Try & Use

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

That's actually all you need to know for a basic starter. If you would like to learn more you can look Steno's [Guide](https://aplos.gxbs.dev/guide/).

## Configuration

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

## Pages

An ordinary page is ordinary Markdown—frontmatter is optional:

```md
# Hello

This page is ready to publish.
```

Use `layout: helpful` to add "go to top" and issue links:

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

## Layouts

- `layout` — normal pages; this is the default.
- `helpful` — normal content plus helpful actions.
- `article` — article metadata, reading time, tags, and previous/next links.
- `articles` — filterable listing from `collections.posts`.
- `notfound` — Aplós 404 page; use it in `content/404.md`.

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

## Icons

Aplós includes a small self-hosted bold subset of
[Phosphor Icons](https://phosphoricons.com/) for navigation, links, callouts,
articles, and theme actions. The bundled Phosphor assets are MIT licensed.

## Development

If you wish to contribute to Aplós, below are some basic information that might help you navigate the codebase:

The five layouts share `ShellStart` and `ShellEnd`, so document structure,
assets, navigation, TOC, and footer are maintained once. Sass is split by
responsibility and compiled when Steno loads the theme.

```sh
deno task dev      # live fixture
deno task check    # fmt, lint, types, build, doctor
```

The demo under [`demo/`](demo/) is the complete Aplós documentation site and
exercises every supported layout; it always uses the latest code from this
branch, so you can see the latest changes and use it as the development
environment.

## Know your rights

This project is under the MIT license:

- **Freedom to Use**: You have the right to use the software for any purpose,
  whether it's personal, academic, or commercial.
- **Freedom to Modify**: You can modify the source code of the software to suit
  your needs or preferences.
- **Freedom to Distribute**: You have the right to distribute the software,
  whether in its original form or modified, to others.
- **Collaboration**: You can collaborate with others on the software's
  development and improvement.
- **No License Compatibility Issues**: You can combine the MIT-licensed software
  with other software, even if they use different licenses.
- **No Usage Restrictions**: There are no restrictions on the technologies or
  fields of use, giving you maximum flexibility.

MIT, copyright 2024–present Gabriel Cozma. See
[third-party licenses](THIRD_PARTY_LICENSES.md) for the bundled Phosphor icon
subset.

## Thanks ❤ & Credits️

- [Duckquill](https://duckquill.daudix.one), from where I got inspired to create
  this project (and many ideas are from there)
- [Hari Rana](https://tesk.page/) for style-related feedback and suggestions
- [Inter](https://rsms.me/inter/), used for all Sans Serif text.
- [Geist Mono](https://vercel.com/font/), used for all monospaced text.
- [Steno](https://steno.gxbs.dev), which is used to power Aplós.
- Everyone that supported the project.
