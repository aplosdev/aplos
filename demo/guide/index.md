---
layout: helpful
title: Guide
---

# Guide

Aplós is a user-friendly theme for Steno that lets you quickly build and
customize a website. In a few steps you can configure the theme, create pages,
and publish the generated static files.

## Initialization

1. Install [Deno](https://deno.com/) if it is not already available.
2. Create a Steno project using the scaffolder: `deno create jsr:@steno/init`,
   choosing "aplos" from the theme list
3. Add Markdown pages to the content directory.

Run `deno task dev` to start the development server.

### With Articles or without Articles

The default theme includes article layouts. Use `layout: article` for a post and
`layout: articles` for a filterable list. If you want a simpler presentation,
set `minimal: true` under `themeConfig`.

See the [Article List guide](./articles-list/) for collection setup.

## Customizing Configuration

Edit `.steno/config.yml` to tailor the site. The
[Editing Configuration](./edit-configuration/) page lists the available Aplós
options.

## Start Writing

Create Markdown files inside your content directory. With `shortUrls: true`,
`guide/index.md` becomes `/guide/` and `about.md` becomes `/about/`.

## Miscellaneous

### Articles (Blogs)

1. Create a `posts` directory in the content directory.
2. Add the `posts` collection to `.steno/config.yml`.
3. Create a listing page with `layout: articles`.
4. Create each post as a Markdown file with `layout: article`.

```yaml
---
layout: article
title: Ipsum
author:
  - Gabriel Cozma
description: Why Ipsum is the best.
date: 2024-03-10T21:33:00+02:00
prev: { url: /posts/first-blog/, title: First Blog }
next: { url: /posts/lorem/, title: Lorem }
tags:
  - demo
  - ipsum
  - example
---
```

Description, author, date, navigation, and tags are optional. Aplós calculates
reading time in the browser. The Steno port does not include Giscus or
ActivityPub comments.

#### Multiple Authors

Add multiple names to the `author` array:

```yaml
author:
  - Gabriel Cozma
  - John Doe
```

### General Styling

The theme exposes an accent-driven palette through `themeConfig.accent`. For a
custom theme build, edit the Sass partials in `assets/scss/`; `mod.ts` compiles
them when Steno loads the theme.

### Changing the Content Width

Override `--content-width` in custom CSS:

```css
:root {
  --content-width: 50rem;
}
```

### Deployment

Run `deno task build` and deploy the generated `dist` directory to any static
host, including Codeberg Pages, GitHub Pages, or GitLab Pages.

#### Codeberg

A CI job only needs Deno, the Steno build command, and a step that publishes
`dist` to the `pages` branch:

```yaml
steps:
  build:
    image: denoland/deno:alpine
    commands:
      - deno task build
  publish:
    image: bitnami/git
    commands:
      - git clone -b pages https://$CODEBERG_TOKEN@codeberg.org/$CI_REPO.git site
      - cp -R dist/. site/
      - cd site
      - git add --all
      - git commit -m "Deploy $CI_COMMIT_SHA [SKIP CI]"
      - git push
```
