---
layout: article
title: Static Navigation Island
description: Make your navigation not be fixed to the screen when scrolling.
date: 2024-07-24T21:56:00+03:00
author:
  - Gabriel Cozma
tags:
  - Navigation
banner: /images/plugins/static-nav.png
prev: Numeric Headings
---

If you want your navigation island to not be fixed to the screen when scrolling, you can apply this plugin. To add the plugin, simply add the plugin's name to the `plugins` array in the `config.mts` file. The plugin will be automatically added to the navigation.

![Screenshot of how such an navigation would look (looks the same as deafult)](/images/plugins/static-nav.png#shadow)


Plugin Name:

```txt
static-nav
```

## Example of the Configuration

```ts
  plugins: [
    "static-nav",
  ],
```
