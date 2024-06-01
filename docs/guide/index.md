---
layout: simple
---

# Guide

Aplós is a user-friendly template for Vitepress that allows you to quickly set up and customize your website. In just a few simple steps, you can configure the template to match your preferences. Let's walk through the process:

[[toc]]

## Initialization

1. Aplós provides a convenient template that you can use to kickstart your project. To begin, click on the following link to initialize a repository with the Aplós template: Initialize Aplós Template.

2. After initializing, you have two options:

   - Clone the repository to edit the project locally: `git clone https://github.com/*your_username*/aplos`
   - Use GitHub Codespaces to edit the project online: [GitHub Codespaces](https://codespace.new) { .external-link }

   Make sure to replace _your_username_ with your GitHub username.

3. Navigate to the `/pages/` and `/.vitepress/` folders. Locate the config.mts file for further customization.

## Package

Aplós is now available as an NPM package, making it easier to install and use. To get started, follow these steps:

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

> If you also want to add aditional styles, you can create a CSS/SCSS file inside the `theme` folder and import it in the `index.ts` file.

> [!WARNING] Heads Up!
> Currently, I recommend to use PNPM if you want to make use of the Article List Layout, as it's not working with NPM.

### With Articles or Without Articles

Aplós offers two versions: one with configuration for articles (blogs) and one without. To choose the version that suits your needs, follow these steps:

1. Navigate to the `index.ts` file inside `/.vitepress/theme/` folder that we created earlier, after that change the import of the `Layout.vue` file to either `Layout.vue` or `minimal/Layout.vue`, and where you see `import "aplos"` change to `import "aplos/minimal"`.

That will disable all the article (blog) related layouts.

#### With Articles

If you want to use the article configuration, you can follow the steps below:

1. Create a file named `posts.data.ts` inside the `/.vitepress/theme/` folder.
2. Add the following code to the `posts.data.ts` file:

```ts{12}
import { createContentLoader } from "vitepress";

interface Post {
  title: string;
  description: string;
  tags: string[];
}

declare const data: Post[];
export { data };

export default createContentLoader("articles/posts/*.md", { // Change the path to your posts
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ frontmatter }) => ({
        title: frontmatter.title,
        description: frontmatter.description,
        tags: frontmatter.tags,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});

function formatDate(raw: string): string {
  const date = new Date(raw);
  date.setUTCHours(12);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
```

2. After adding the script, you can change where your posts are located by changing the path in the `posts.data.ts` file on the highlighted line.

3. If you want a page with a list of all your articles, you can create a file named however you want and add the following at the start of the file:

```yaml
---
layout: article-list
---
```

4. Enjoy your articles/blog! (Make sure you read more about setting up the article configuration in the [Articles](#articles-blog) section)

Replace `!!YOUR_COLOR_HEX!!` with your desired color hex code.

You can also customize any other style of the project under the `$color-accent` variable.

## Customizing Configuration

You can edit the `config.mts` file to tailor the template to your needs. **I've made an page that explains how to do that.**

<section class="more-links">

- [**Edit Configuration** If you want to customize the configuration of the project, you can follow the long list of what can you customize by clicking here](./edit-configuration.md)

</section>

## Start Writing

With the configuration set up, you can now start creating and editing your files. Utilize the `pages` folder to add new pages and [customize the project](./edit-configuration.md) to suit your preferences.

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
title: "Ipsum"
author: Gabriel Cozma
description: Why Ipsum is the best.
shortDescription: Why Ipsum is the best.
date: 2024-03-10T21:33:00+02:00
prev: First Blog
next: Lorem
tags:
  - demo
  - ipsum
  - example
---
```

#### Comments

Aplós supports two comment systems: [Giscus](https://giscus.app) and ActivityPub posts. To enable one of them, follow these steps:

- **If you want Giscus**: inside your posts/articles, add the following inside frontmatter:

```yaml
comments: giscus
```

You also need to add the following inside the `config.mts` file, in the `theme` object:

```ts
    blog: {
      data: {
        repo: "yourusername/yourrepo",
        repoid: "your-repo-id",
        categoryid: "your-category-id",
      },
    },
```

Make sure to edit the `repo`, `repoid`, and `categoryid` with your own values. Once that, you don't need to do anything else, the comments will right there!

---

- If you want **ActivityPub**: inside your article/post, add the following inside frontmatter:

```yaml
comments: activitypub
post: https://mastodon.example/@yourusername/1234567890
```

Make sure to edit the `post` link with your own post link. Once that, you don't need to do anything else, the comments will right there!

### General Styling

Using Aplós, you can customise the appearance of your content with various styling options. The `.vitepress/theme/index.ts` file allows importing additional files, including CSS or SCSS files, to apply custom styles to your project. 

For example, to import a CSS file, add the following line to the `index.ts` file:

```ts
import "./styles.css";
```

> Predicting that you have a `styles.css` file in the same directory as the `index.ts` file (`theme` folder).

Inside the `styles.css` file, you can add custom styles to modify the appearance of your content, or even adding custom components.

### Chaning the Content Width

You can modify the width of the content in Aplós by changing the `--content-width` variable in the `:root` selector. For example, to set the content width to 800px, add the following CSS to your project:

```css
:root {
  --content-width: 800px;
}
```

### Styling Images

You can style images in your content using various options provided by Aplós. Here's how to apply each styling option:

- **Not Rounded**: Remove the border radius from an image.
- **Static**: Prevent an image from being resized when hovered or active.
- **Size Options**:
  - **Small**: Make an image smaller.
  - **Medium**: Make an image medium-sized.
- **Visual Effects**:
  - **Shadow**: Add a shadow to an image.
  - **Monochrome**: Make an image monochrome.
  - **Invert**: Invert the colors of an image.
  - **Blur**: Blur an image.
  - **Sepia**: Add a sepia effect to an image.
- **Transparency**: Make an image transparent.

To apply any of these options, use the following syntax:
```md
![My image](./image.png#option)
```

For example, to make an image small, use the following syntax:
```md
![My image](./image.png#small)
```

### Automatically Update Aplós

To automatically update Aplós, which is an NPM Package hosted on GitHub, you can use Dependabot. Follow these steps to set it up:

1. Inside your project repository that uses Aplós, create a file called `dependabot.yml` within the `.github/` folder.

2. Add the following configuration to `dependabot.yml`:

```yml
version: 2

updates:
  - package-ecosystem: npm
    schedule:
      interval: "daily"
    directory: /
```

This configuration tells Dependabot to check for updates to the NPM Package (npm) daily and apply them to the root directory (directory: /).

By setting up Dependabot with this configuration, you ensure that Aplós stays up-to-date automatically, saving you the hassle of manually managing NPM updates.

::: tip
You can even use this on other projects that use NPM packages, as it saves alot of time
:::

### Deployment

To deploy your website, follow the deployment guide provided by Vitepress: [Deploy Your VitePress Site](https://vitepress.dev/guide/deploy)

#### Codeberg

In the case of you wanting to host your website on Codeberg, it's actually not that hard:

##### **Workflow**

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
      - pnpm run pages:build
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
      - cp -ar ./pages/.vitepress/dist/* source-code/
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

#### **Installing the needed package**

If you want to optout from using a workflow or don't want to make a request: There is actually a really simple and nice NPM package that helps you deploy your project to Codeberg. The package is called `codeberg-pages` you can install by running:

```bash
npm install codeberg-pages
```

Then, make a script to run the script:

```bash
(...)
  "scripts": {
    (...)
    "pages:deploy": "codeberg-pages pages/.vitepress/dist"
  },
(...)
```

With that added you can run:

```bash
npm run pages:deploy
```

That will create a new branch called "pages" where the build output will stay.
