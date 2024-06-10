---
layout: helpful
---

# Demo

[[toc]]

> [!WARNING] Heads Up!
> If you want to see the blog demo, you can see it [here](/blog/)

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore aperiam, asperiores doloribus earum qui id harum neque modi nostrum similique. Rerum consequatur ab eaque velit consequuntur blanditiis praesentium commodi.

Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita.

Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem situm in nobis ut et voluptates et dolores nasci fatemur e corporis voluptatibus et doloribus -- itaque concedo, quod modo dicebas, cadere causa, si qui incurrunt, numquam vim tantam.

## Header 2

### Header 3

- Item 1
- Item 2
- Item 3
- `Item 4`

#### Header 4

##### Header 5

###### Header 6

> “Simplicity is the ultimate sophistication.”
>
> > — Leonardo da Vinci

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

### Input

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

### Output

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Photo & Video

[![A herd of sheep grazing on a lush green field](https://images.unsplash.com/photo-1713098564541-3e11d9898721?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)](https://unsplash.com/photos/a-herd-of-sheep-grazing-on-a-lush-green-field-yB3YWgyQIk0)

<figcaption>A herd of sheep grazing on a lush green field</figcaption>

To write a caption to a photo use the `figcaption` tag:

```html
<figcaption>Wow</figcaption>
```

<video alt="Red flower wakes up" controls="" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"></video>

<figcaption>An "interactive example" of a video called flower.webm from the MDN Docs</figcaption>

Text can be **bold**, _italic_, or strikethrough.

Also we have [Links](/)

We also have lines.

---

## Information boxes

Aplus has various types of information boxes.

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

<kbd>⌘ Super</kbd> + <kbd>Space</kbd>

Use this when something is <mark>really important</mark>

## Table

| Syntax       | Description |
| ------------ | ----------- |
| Header       | Title       |
| Paragraph    | Text        |
| Something    | And wow     |
| I don't know | And huh     |

## Small Text

You can add small text by using the `<small>` tag.

### Input

```html
<small>Something Small</small>
```

### Output

<small>Something Small</small>

## Time

You can show a specific time by using the `<time>` tag:

#### Input

```html
<time>10:00</time>
```

#### Output

<time>10:00</time>

### Time Animation

You also can have an animation to the time like this one: <time>**11:00**</time>

#### Input

```md
<time>**11:00**</time>
```

#### Output

<time>**11:00**</time>

## Other Elements

### Progress Bar

You can add a progress bar by using the `<progress>` tag:

#### Input

```html
<progress value="50" max="100"></progress>
```

#### Output

<progress value="50" max="100"></progress>

### Sample Output (`<samp>`)

You can add a sample output by using the `<samp>` tag:

#### Input

```html
<samp>Sample Output</samp>
```

#### Output

<samp>Sample Output</samp>

### Legend

You can add a legend by using the `<legend>` tag:

#### Input

```html
<legend>Legend</legend>
```

#### Output

<legend>Legend</legend>

### Inline Quote (`<q>`)

You can add an inline quote by using the `<q>` tag:

#### Input

```html
<q>Inline Quote</q>
```

#### Output

<q>Inline Quote</q>

### Grammar Mistakes (`<u>`)

You can add a text that tries to replicate grammar mistakes by using the `<u>` tag:

#### Input

```html
<u>Trying to replicate grammar mistakes</u>
```

#### Output

<u>Trying to replicate grammar mistakes</u>

### Deleted Text (`<del>`) & Inserted Text (`<ins>`)

You can add deleted text by using the `<del>` tag:

#### Input

```html
<del>Deleted Text</del> <ins>Inserted Text</ins>
```

#### Output

<del>Deleted Text</del> <ins>Inserted Text</ins>
