---
layout: helpful
---

# Demo

[[toc]]

> [!NOTE] Note
> This is a demo of most of the components. If you want to see the blog demo, you can see it [here](./blog/)

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore aperiam, asperiores doloribus earum qui id harum neque modi nostrum similique. Rerum consequatur ab eaque velit consequuntur blanditiis praesentium commodi.

Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita.

Text can be **bold**, _italic_, ~~strikethrough~~ and even ~~**_combined_**~~.

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

> “Simplicity is the ultimate sophistication.”
>
> > — Leonardo da Vinci

- Item 1
- Item 2
- Item 3
- `Item 4`

| Syntax       | Description |
| ------------ | ----------- |
| Header       | Title       |
| Paragraph    | Text        |
| Something    | And wow     |
| I don't know | And huh     |

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

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

To write a caption to a photo use the `figcaption` tag:

```html
<figcaption>Wow</figcaption>
```

### Styling Images

You can style images in your content using various options provided by Aplós. Here's how to apply each styling option:

- `not-rounded`: Remove the border radius from an image.
- `static`: Prevent an image from being resized when hovered or active.
- **Size Options**:
  - `small`: Make an image smaller.
  - `medium`: Make an image medium-sized.
  - `full`: Make an image use 100% of the page's width.s
- **Visual Effects**:
  - `shadow`: Add a shadow to an image.
  - `mono`: Make an image monochrome.
  - `invert`: Invert the colors of an image.
  - `blur`: Blur an image.
  - `sepia`: Add a sepia effect to an image.
  - `pixel`: Pixelate an image.
- `transparent`: Make an image transparent.

To apply any of these options, use the following syntax:

```md
![My image](./image.png#option)
```

For example, to make an image small, use the following syntax:

```md
![My image](./image.png#small)
```

> [!TIP] Tip
> You can combine multiple options by separating them with a comma. For example, to make an image small and add a shadow, use the following syntax:
>
> ```md
> ![My image](./image.png#small#shadow)
> ```

<video alt="Red flower wakes up" controls="" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"></video>

<figcaption>An "interactive example" of a video called flower.webm from the MDN Docs</figcaption>

```md
![Photo of mountain range under clear sky](https://images.unsplash.com/photo-1501082183835-b7b33db89c3f?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#full)
```

![Photo of mountain range under clear sky](https://images.unsplash.com/photo-1501082183835-b7b33db89c3f?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#full)

---

## Information Boxes

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

```md
> [!INFO]
> This is an info box.

> [!TIP]
> This is a tip.

> [!WARNING]
> This is a warning.

> [!DANGER]
> This is a dangerous warning.

> [!NOTE]
> This is a note.

::: details
This is a details block.
:::
```

> [!INFO] Info
> This is an info box.

> [!TIP] Tip
> This is a tip.

> [!WARNING] Warning
> This is a warning.

> [!DANGER] Danger
> This is a dangerous warning.

> [!NOTE] Note
> This is a note.

::: details
This is a details block.
:::

## Miscellaneous

## Time (`<time>`)

You can show a specific time by using the `<time>` tag:

```html
<time>10:00</time>
```

<time>10:00</time>

### Time Animation

You also can have an animation to the time like this one: <time>**11:00**</time>

```md
<time>**11:00**</time>
```

<time>**11:00**</time>

## Small Text (`<small>`)

You can add small text by using the `<small>` tag.

```html
<small>Something Small</small>
```

<small>Something Small</small>

### Progress Bar (`<progress>`)

You can add a progress bar by using the `<progress>` tag:

```html
<progress value="50" max="100"></progress>
```

<progress value="50" max="100"></progress>

### Sample Output (`<samp>`)

You can add a sample output by using the `<samp>` tag:

```html
<samp>Sample Output</samp>
```

<samp>Sample Output</samp>

### Legend

You can add a legend by using the `<legend>` tag:

```html
<legend>Legend</legend>
```

<legend>Legend</legend>

### Inline Quote (`<q>`)

You can add an inline quote by using the `<q>` tag:

```html
<q>Inline Quote</q>
```

<q>Inline Quote</q>

### Grammar Mistakes (`<u>`)

You can add a text that tries to replicate grammar mistakes by using the `<u>` tag:

```html
<u>Trying to replicate grammar mistakes</u>
```

<u>Trying to replicate grammar mistakes</u>

### Deleted Text (`<del>`) & Inserted Text (`<ins>`)

You can add deleted text by using the `<del>` tag:

```html
<del>Deleted Text</del> <ins>Inserted Text</ins>
```

<del>Deleted Text</del> <ins>Inserted Text</ins>

### Keyboard Input (`<kbd>`)

You can add keyboard input by using the `<kbd>` tag:

```html
<kbd>⌘ Super</kbd> + <kbd>Space</kbd>
```

<kbd>⌘ Super</kbd> + <kbd>Space</kbd>

### Marked Text (`<mark>`)

You can add marked text by using the `<mark>` tag:

```html
<mark>Marked Text</mark>
```

<mark>Marked Text</mark>

### Check Boxes

> [!NOTE] Note
> This will only work if you have the markdown-it-checkbox plugin installed.

You can add a check box by using the `[ ]` tag:

```md
- [ ] Check Box

- [x] Checked Box

- [ ] Unchecked Bo
```

- [ ] Check Box

- [x] Checked Box

- [ ] Unchecked Box
