---
layout: helpful
---

# Guide

Aplós is a user-friendly template for Vitepress that allows you to quickly set up and customize your website. In just a few simple steps, you can configure the template to match your preferences. Let's walk through the process:

[[toc]]

## Initialization

1. Aplós provides a convenient template that you can use to kickstart your project. To begin, click on the following link to initialize a repository with the Aplós template: Initialize Aplós Template.

2. After initializing, you have two options:

   - Clone the repository to edit the project locally: `git clone https://github.com/*your_username*/aplos`
   - Use GitHub Codespaces to edit the project online: [GitHub Codespaces](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=737827959)

   Make sure to replace _your_username_ with your GitHub username.

3. Navigate to the `/content/` and `/.vitepress/` folders. Locate the config.mts file for further customization.

## Package

To get started, follow these steps:

1. Install the Aplós package by running the following command in your terminal:

```bash
npm install aplos
```

2. After installing the package, in your project directory, create a folder named `theme` inside the `.vitepress` folder. Then, create a `index.ts` file inside the `theme` folder. This file will contain the following code:

```ts
import Aplos from "aplos/Layout.vue";
import type { Theme } from "vitepress";
import "aplos";

export default {
  Layout: Aplos,
} satisfies Theme;
```

> [!TIP] Tip
> If you also want to add aditional styles, you can create a CSS/SCSS file inside the `theme` folder and import it in the `index.ts` file.

### With Articles or without Articles

Aplós offers two versions: one with configuration for articles (blogs) and one without. To choose the version that suits your needs, follow these steps:

1. Navigate to the `index.ts` file inside `/.vitepress/theme/` folder that we created earlier, after that change the import of the `Layout.vue` file to either `Layout.vue` or `minimal/Layout.vue`, and where you see `import "aplos"` change to `import "aplos/minimal"`.

That will disable all the article (blog) related layouts.

#### With Articles

If you want to use the article configuration, you can check the provided guide below:

<section class="more-links">

- [**Article List** If you want to create a list of articles, you can follow the guide by clicking here](./articles-list.md)

</section>

## Customizing Configuration

You can edit the `config.mts` file to tailor the template to your needs. **I've made an page that explains how to do that.**

<section class="more-links">

- [**Edit Configuration** If you want to customize the configuration of the project, you can follow the long list of what can you customize by clicking here](./edit-configuration.md)

</section>

## Start Writing

With the configuration set up, you can now start creating and editing your files. Utilize the `content` folder to add new pages. (if you used the template, you already have a `content` folder with some example pages)

---

## Miscellaneous

Some additional guides and tips to help you get the most out of Aplós:

### Articles (Blogs)

Setting up articles/a blog in Aplos is a breeze. Just follow these simple steps:

1. Create a folder named how ever you like in your project directory.
2. Inside the newly created folder, create an `index.md` file and set its layout to `article-list`.
3. Write your desired content in the `index.md` file.
4. Create a folder named `posts` inside the folder.
5. Inside the `posts` folder, create individual articles as separate Markdown files.
6. At the beginning of each article file, include the following frontmatter:

```yaml
---
layout: article
title: Ipsum
author:
  - Gabriel Cozma
description: Why Ipsum is the best.
date: 2024-03-10T21:33:00+02:00
prev: First Blog
next: Lorem
tags:
  - demo
  - ipsum
  - example
---
```

> [!NOTE] Notes
>
> 1.  Description, Author and Date Are Optional.
> 2.  The `prev` and `next` fields are used to link articles together. They should contain the titles of the previous and next articles, respectively.
> 3.  The `tags` field is used to categorize articles, it's not necessary to include it. But still, it's recommended.

#### Comments

Aplós supports two comment systems: [Giscus](https://giscus.app) and ActivityPub posts. To enable one of them, follow these steps:

- **If you want Giscus**: inside your posts/articles, add the following inside frontmatter:

```yaml
comments: giscus
```

You also need to configure Giscus in the `config.mts` file. You can refer to the [Edit Configuration](./edit-configuration.md#articles) page for more information.

---

> [!WARNING] Warning
> Currently, ActivityPub based comments aren't working. Will be fixed in the future. Sorry for the inconvenience.

#### Multiple Authors

If you have multiple authors for your articles, you can add them in the frontmatter like this:

```yaml
author:
  - Gabriel Cozma
  - John Doe
```

It's as simple as that! You can add as many authors as you want.

### General Styling

Using Aplós, you can customise the appearance of your content with various styling options. The `.vitepress/theme/index.ts` file allows importing additional files, including CSS or SCSS files, to apply custom styles to your project.

For example, to import a CSS file, you can add such a line to the `index.ts` file:

```ts
import "./overwrite.css";
```

> [!TIP] Tip
> It's recommended to have the `overwrite.css` file in the same directory as the `index.ts` file, the `.vitepress/theme/` folder.

Inside the `overwrite.css` file, you can add custom styles to modify the appearance of your content, or even adding custom components.

### Chaning the Content Width

You can modify the width of the content in Aplós by changing the `--content-width` variable in the `:root` selector. For example, to set the content width to 50rem, add the following CSS to your project:

```css
:root {
  --content-width: 50rem;
}
```

---

> [!TIP] Tip
> If it happens that you host your website on GitHub, you can use Dependabot to automatically update Aplós. To set it up, refer to [Dependabot Configuration](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates) made by GitHub. For a quick example, you can see the [Dependabot Configuration used by Aplos Template](https://github.com/aplosdev/template/blob/main/.github/dependabot.yml).

### Deployment

To deploy your website, you can refer to the [Guide made by VitePress](https://vitepress.dev/guide/deploy). In the case that there isn't an examaple for your hosting provider, you can follow the steps below:

#### Codeberg

In the case of you wanting to host your website on Codeberg, it's actually not that hard:

##### Workflow

If you have access to [Codeberg CI](https://codeberg.org/Codeberg-e.V./requests/#woodpecker-ci) take advantage of the straightforward workflow I've created. This workflow automates the process of building your website whenever you make a push, deploying the deployment of your changes:

```yml
# Exclude page pipeline to be run on "pages" branch
when:
  branch:
    exclude: pages

steps:
  # Build vitepress static files
  build:
    image: alpine
    commands:
      - apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing pnpm git
      - pnpm install
      - pnpm run content:build
    when:
      event: [pull_request, push]

  publish:
    image: bitnami/git
    # Must be set in Woodpecker configuration
    secrets: [mail, codeberg_token]
    commands:
      - git config --global user.email $MAIL
      - git config --global user.name "Woodpecker CI"
      - git clone -b pages https://$CODEBERG_TOKEN@codeberg.org/$CI_REPO.git source-code
      - rm -r source-code/*
      - cp -ar ./content/.vitepress/dist/* source-code/
      - cd source-code
      - git add --all
      - git commit -m "Woodpecker CI ${CI_COMMIT_SHA} [SKIP CI]"
      - git push

    when:
      event: push
```

To seamlessly integrate with your CI process, simply configure two essential secrets in your CI Settings:

1. `mail`: This secret should contain the email associated with your account.
2. `codeberg_token`: This secret should store a token from your account, equipped with read and write access for your repositories.

#### Using an package

If you want to optout from using a workflow or don't want to make a request: There is actually a really simple and nice NPM package that helps you deploy your project to Codeberg. The package is called `codeberg-pages` you can install by running:

```bash
npm install codeberg-pages
```

Then, make a script to run the script:

```bash
(...)
  "scripts": {
    (...)
    "content:deploy": "codeberg-pages content/.vitepress/dist"
  },
(...)
```

With that added you can run:

```bash
npm run content:deploy
```

That will create a new branch called "pages" where the build output will stay.
