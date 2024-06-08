## 2.0.3 (upcoming)

### Feature(s)

- Add a configurable message after each article

### Fix(es)

- Remove link decoration to the articles' footer

## 2.0.2 (2024-06-05)

### Fix(es)

- Make minimal ignore the `article` configuration

## 2.0.1 (2024-06-05)

### Fix(es)

- Fix the `main` on smaller screens

## 2.0.0 (2024-06-05)

### Breaking Changes

- Rename `blog` configuration to `article`

- Giscus comments configuration via `theme` -> `articles` -> `giscus` instead of `theme` -> `data`

- Make `minimal` layout an option in the configuration, rather then an import

- Make the Blog List an custom component due to it's complexity

  - This will allow for more customization and easier maintenance
  - **Will require extra effort to implement it again** (example provided in the [documentation](https://aplos.gxbs.me/guide/articles-list) and package file under `custom/BlogListExample.txt`)

- Remove all fallbacks for the old names
  - `blog-*` -> `article-*`
  - `no-blog` -> `minimal`
  - `simple` -> `helpful` (for the layout)

### Features

- Rework the informational cards colors

- Provide a non-custom font version of Aplós (`aplos/plain`)

- Provide `style` frontmatter configuration for any page

  - `numeric` for numeric style headings

- Make Icon Links a toggleable option in Configuration

- Add `note` informal card

- Small changes to images behavior

  - Smaller scale when active
  - Max width for images when active
  - Images with a link:
    - Add pointer cursor
    - Make border thicker when hover

- Better accessibility for keyboard users

  - With an custom focus indicator

- Add support for various types of elements
  - `progress` for progress bars
  - `samp` for sample output
  - `legend` for legends
  - `q` for inline quotes
  - `u` for trying to replicate grammer mistakes
  - `del` for deleted text
  - `ins` for inserted text

### Cleanup(s)

- Added an warning that the ActivityPub-based comments aren't currently working

- Add a `custom` folder for custom components

- Remove Layout imports from Aplós Minimal (useless imports)

- Sort imports in Aplós Minimal

- Make Geist Mono/Main Monospace an variable

### Fix(es)

- Make just the `glitch` class be animated in the Not Found page (instead of all `<span>` elements)

### For Development

- Add `Prettier` to the project for better code consistency (replaceing `EditorConfig`)

- Add an [Contributing](https://aplos.gxbs.me/contributing) page for clear steps on how to contribute

- Make everything more <abbr title="Don't Repeat Yourself">DRY</abbr> by using `mixin` in repeated styles

## 1.6.0 (2024-05-25)

### Feature(s)

- Add a `no-underline` class to remove the underline from links

- Make the Content's Width adjustable

- Make "Create a new Issue" button in the Helpful Layout optional

- Provide Modern Font Stacks for the system font stack

- Make "File an Issue" button on the not found page optional

- Make the Not Found page smaller in width by 30%

### Cleanup(s)

- Migrate the Helpful Layout and the Not Found Layout to the `layouts` folder

- Migrate styles from `index.scss` and `common.scss` to their respective files if they are big enough for better organization

- General cleanup of content and code

- Rebrand the `blog-*` classes to `article-*` classes (the components themselves were already rebranded in 1.5.0)

- Cleanup the Not Found's View Styles

- Add Aplós' version to `index.scss` for better tracking

- Sort Imports

- Sort Styles in Components

### For Development

- Update Dependencies inside the Development Example

- Add `.editorconfig` file for better code consistency

## 1.5.1 (2024-05-18)

### Feature(s)

- Unify `color-accent-alpha` dark and light into one variable

## 1.5.0 (2024-05-11)

### Feature(s)

- Ability to style images via the URL (with `#` + `not-rounded`, `static`, `small`, `medium`, `shadow`, `mono`, `invert` `blur`, `sepia`, `transparency`)

- Give a title for Table of Contents for better accessibility

- Disable the languge detection for code snippets when hovering over them

- Provide the version of Aplós in the footer when hovering over ”Aplós” in ”Powered by”

- Add a "Skip to Content" link for better accessibility, and showing when `Tab` is pressed

- Replace `blog-*` with `article-*` for better naming(_Temporary Fallback is provided_)

- Replace `no-blog` with `minimal` for better naming and understanding (_Temporary Fallback is provided, **but not for the layout**_)

> Fallbacks are provided for the old names, but it is recommended to update the names to the new ones. In 2.0.0, the old names will be removed. The fallbacks are only here to not pump the version to 2.0.0 just for this change.

### Fix(es)

- Remove the margin from `code` tags inside `pre` tags on mobile

### Cleanup(s)

- Add border to link images (with the option to remove it)

- Migrate the body to an grid layout

- Move Layouts to their own folder

- Add underline to the links in the Table of Contents

- Add margin to the links in the Table of Contents

- Update the project details in `index.scss` to match the License

### For Development

- Add .development/default folder to the repository for easy development and testing (after the issue of the last release)

- Add `.npmignore` file to ignore the `.development` and `.github` folders

### Dependencies

- Pump SASS from 1.76.0 to 1.77.0 (https://github.com/aplosdev/aplos/pull/2)

### Work in Progress Element(s)

- Reinstate the ActivityPub comments _(not yet fully implemented)_

  - [x] Migrate script to TypeScript locally
  - [x] Make it run `onMounted`
  - [ ] Fix the build issue

- Allow elements to go over the allocated width
  - [x] Migrate body to an grid
  - [ ] Provide Grid Templates

## 1.4.1 (2024-05-05)

> This release is important to fix the build process of the project, so update as soon as possible.

### Fix(es)

- Disable ActivityPub comments (for now, till I find a fix for the errors on the build process)

### Work in Progress Element(s)

- A full rework of how ActivityPub comments are handled (to avoid errors on build)

- Allowing elements to go over

## 1.4.0 (2024-05-04)

### Cleanup(s)

- Remove duplicated styles that are now provided by `normalize.css`

- Provide an easier way to make the time blink in the `time` tag (now using bold instead of `span`)

- Migrate basic font configuration to the `fonts.scss` file (rather than the `index.scss` file)

- Migrate all `pixel` values to `rem` values for better accessibility

### Fix(es)

- Allow a changeable dark mode background color for code snippets

- Made the navigation island have a specific minimum height (it could become smaller until now)

### Feature(s)

- Add ActivityPub support for comments (now you can choose between `activitypub` and `giscus`)

- Provide a `title` for the navigation icons to improve accessibility

- Add two new types of links (`external` and `internal`) with different icons at the end of the link

- Provide a build-in icon for custom cards

## 1.3.3 (2024-04-27)

### Feature(s)

- **normalize.css:** Add normalize.css to the project for better cross-browser compatibility

### Cleanup(s)

- Migrated specific styles from the main SCSS file to it's component's file

## 1.3.2 (2024-04-24)

### Features

- **spoiler:** Provide a way to show spoilers while blurring the text
