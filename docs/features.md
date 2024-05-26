---
layout: simple
---

# Features

> [!WARNING] Work in Progress
> You found an work in progress page, please come back later.

[[toc]]

Aplós is a rich of amazing features that will help you create a website in minutes. Here are some of the features that Aplós has:

## Custom Alerts

Taking advantage of the aready in place "Custom Containers" build by the VitePress team, Aplós has customised them to fit the theme of the project. This allows you to create a more visually appealing website.

Aplós has various types of information boxes.

- The `info` box provides general information.
- The `tip` box provides helpful tips.
- The `warning` box indicates potential issues or concerns.
- The `danger` box warns about dangerous situations.
- The `details` block provides additional details or explanations.

All of them can be applied using the following formula:

```md
::: name-of-the-box (info, tip, warning, danger, details)
The message you want to share
:::
```

### Input

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

### Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
