---
layout: article
title: Sticky Navigation Island
description: Make your navigation be connected to the top of the page at all times.
date: 2024-07-22T10:27:00+02:00
author:
  - Gabriel Cozma
tags:
  - Navigation
banner: /images/plugins/sticky-nav.png
next: Full Width Navigation
---

If you want your navigation to be always be connected to the top of the page, you can apply this plugin. To add the plugin, simply add the plugin's name to the `plugins` array in the `config.mts` file. The plugin will be automatically added to the navigation.

![Screenshot of how such an navigation would look](/images/plugins/sticky-nav.png#shadow)

Plugin Name:

```txt
sticky-nav
```

## Example of the Configuration

```ts
  plugins: [
    "sticky-nav",
  ],
```
