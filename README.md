<div align="center">
<h1>Aplós</h1>
<p>A sleek, contemporary, and purposefully designed theme for Steno</p>
</div>

> [!IMPORTANT]
> If you want to see the documentation/guide check <https://aplos.gxbs.me>.

![Screenshot of Aplos](https://github.com/GabsEdits/aplos/assets/110247388/3c98f962-b560-442a-9f56-9b805156a272)

## Features

- Lightweight and minimalistic, powered by [Steno](https://steno.gxbs.dev/).
- Elegantly styled with a primary color theme for a visually pleasing experience.
- Mobile-friendly design with support for dark mode.
- Optimized for social media sharing with meta cards.
- Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- Local development made easy with Deno/JSR, no `node_modules` required to run the theme itself.

## Name

The name 'Aplós', pronounced as `/aplós/` is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple'. This naming choice showcases the essence of the project — it's dedication to providing users with a straightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.

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

That is enough for a complete site. Add Markdown files to `content/`; folders
become routes and `index.md` becomes the folder homepage. You can check the
next steps by looking at the [Guide](https://aplos.gxbs.me/guide/).

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

## Development

If you want to contribute to Aplós, make sure to fork the repository and
clone it with `git clone` or `gh repo clone`.

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
environment. **If you happen to find any issues, please report them in the
[Issues](https://github.com/aplosdev/aplos/issues) section.**

## Know your rights

This project is under the MIT license:

- **Freedom to Use**: You have the right to use the software for any purpose, whether it's personal, academic, or commercial.
- **Freedom to Modify**: You can modify the source code of the software to suit your needs or preferences.
- **Freedom to Distribute**: You have the right to distribute the software, whether in its original form or modified, to others.
- **Collaboration**: You can collaborate with others on the software's development and improvement.
- **No License Compatibility Issues**: You can combine the MIT-licensed software with other software, even if they use different licenses.
- **No Usage Restrictions**: There are no restrictions on the technologies or fields of use, giving you maximum flexibility.

MIT, copyright 2024–present Gabriel Cozma. See
[third-party licenses](THIRD_PARTY_LICENSES.md) for the bundled Phosphor icon
subset.

## Thanks ❤ & Credits️

- [Duckquill](https://duckquill.daudix.one), from where I got inspired to create this project (and many ideas are from there)
- [Hari Rana](https://tesk.page/) for style-related feedback and suggestions
- [Inter](https://rsms.me/inter/), used for all Sans Serif text.
- [Geist Mono](https://vercel.com/font/), used for all monospaced text.
- [Steno](https://steno.gxbs.dev), which is used to power Aplós.
- Everyone that supported the project.
