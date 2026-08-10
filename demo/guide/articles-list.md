---
layout: helpful
title: Articles List Configuration
---

# Articles List Configuration

The Steno port includes the article list as the built-in `articles` layout. It
reads a Steno collection at build time and adds client-side tag filtering.

## Initial Setup

Create a `posts` folder inside your content directory. Each Markdown file in
that folder becomes an item in the `posts` collection.

```text
content/
├── articles/
│   └── index.md
└── posts/
    ├── first-post.md
    └── second-post.md
```

Configure the collection in `.steno/config.yml`:

```yaml
collections:
  posts:
    sortBy: date
    order: desc
```

Each post can use the Aplós `article` layout:

```yaml
---
layout: article
title: My First Post
description: A short introduction to the post.
date: 2026-08-10
author:
  - Gabriel Cozma
tags:
  - Steno
  - Example
---
```

## Setting up the Page

Set the listing page's layout to `articles`. Steno passes `collections.posts` to
the Tau layout automatically; Aplós renders the title, description, date, tags,
and filter buttons.

```md
---
layout: articles
title: My Articles
---

# My Articles

Welcome to my articles.
```

No custom component, data loader, or browser framework is required.
