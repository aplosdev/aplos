---
layout: helpful
---

# Static Template

Besides Aplós being a VitePress theme, it also provides a simple HTML & CSS template referred to as the 'Static Template'. It's nicely paired with simple yet useful components that help you create a website in minutes. Luckily, it's really easy to set up.

## Installation

Getting it on your local machine by running the following command in your terminal:

```bash
git clone --single-branch --branch html https://github.com/aplosdev/template
```

> [!NOTE] Note
> Make sure you have Git installed on your machine. Otherwise, you can download the repository as a ZIP file from the [GitHub Repository](https://github.com/aplosdev/template/tree/html).

Once you've got it cloned, dive into the index.html file, make your tweaks, and done!

## Usage

Inside the `index.html` file, you'll find a style section with a customizable color palette. Want a change? Go for it! Modify the text, add elements as you wish. For a inspiration, check out the [Demo Page](/demo). Creating cards like an warning card? Just add an element with the id "`warning`", add in an `<h1 />` and a `<p />`, and you're good to go.

> [!warning] Warning
> Please note that this template may have a slight lag behind the latest version. This intentional approach allows for a greater focus on improving the main version rather than constantly catching up with every release. After about one point release (for example if the current version is `1.3.5` the static template is at `1.2.5`), the template will receive a polished update to the latest version.

::: details Heads Up
Some elements, like the 404 page, are designed specifically for the VitePress theme. Therefore, they won't be available in the Static Template.
:::

## Deployment

Deploying your project is a simple process since it's just simple HTML & CSS. Here are a few platforms I personally recommend:

1. [Codeberg Pages](https://codeberg.page)
2. [GitHub Pages](https://github.io)
3. [GitLab Pages](https://gitlab.io)
4. Whatever you think works the best for you
