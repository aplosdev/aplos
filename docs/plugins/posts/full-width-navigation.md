---
layout: article
title: Full Width Navigation
description: Make your navigation full-width.
date: 2024-07-22T10:28:00+03:00
author:
  - Gabriel Cozma
tags:
  - Navigation
banner: /images/plugins/full-width-nav.png
prev: Numeric Headings
next: Static Navigation Island
---

If you want a more classic navigation style, you can make it full-width. To add the plugin, simply add the plugin's name to the `plugins` array in the `config.mts` file. The plugin will be automatically added to the navigation.

![Screenshot of how such an navigation would look](/images/plugins/full-width-nav.png#shadow)

Plugin Name:

```txt
full-width-nav
```

## Example of the Configuration

```ts
  plugins: [
    "full-width-nav",
  ],
```
