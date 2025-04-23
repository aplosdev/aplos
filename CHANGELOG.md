# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Introducing, Boosts for Aplós**

  - Customize your website with plugins that enhance its functionality and appearance. Aplós offers a variety of plugins that you can easily integrate into your project. Let's explore the available plugins and how you can use them to improve your website.

- The navigation bar first appears when you enter the page, as you scroll down it will disappear, and when you scroll up it will appear again (that way it won't take up space when you're reading, so you can focus on the content)

- New style for article headers

  - New date format for articles (with the hour and minute)

- **Deprecate the `description` field for articles**

  - The `description` field for articles is now deprecated, and now the as a replacement, the content until the first `hr` element will be used as the description for the article in both the article list and the article itself.

- Adaptive navigation island

- Add an option to make authors not be displayed

- Add the option to have a custom button for the helpful layout

- Make comments in articles optional

- Make Numeric Headings a plugin (slightly breaking change)

- New background color for the navigation island

- Reading time for articles

- Support for the range type of inputs

- Make the progress bar use 100% of the width

- Smooth transitions for the `time` element

### Removed

- Remove fallback for "Make navigation links' URL be provided with `url` not `link`

### Fixed

- The class name for the extra link in the helpful layout

- The skip to content button not being on sites without the navigation island

- SCSS deprecation warning

### Changed

- Make the lists' markers be the color accent

- Use box-shadow instead of border-bottom to prevent layout jump for navigating articles (https://github.com/aplosdev/aplos/pull/74 by [@daudix](https://github.com/daudix))

- Make grammar mistakes to have a red underline

- Make the footer navigation look similar to the header navigation

- Hovering the navigation island will make it slightly bigger

- Hovering the navigation title will make it turn into the color accent rather than adding an underline

- Add an ordering note for all lists (articles & plugins)

- Remove the margin from the last paragraph

- Remove the margin from the first paragraph inside blockquotes

- Better ID for the helpful layout

- Hide the helpful layout on print

- Syntax fixes across elements

- Migrate every `px` to `rem` for better scaling (I did that once already, but they appeared again)

- Move the details of the article to the bottom of the article's card

- Small changes to the `mark` element by making smaller and more padding

---

### Development

#### Fixed

- The class name for the extra link in the helpful layout

#### Added

- Add margin to the Giscus Comments
- Support for build provenance attestation for package releases.

#### Changed

- Made article lists a flex

#### Dependencies

- Bump `vue` from 3.4.35 to 3.5.13 (https://github.com/aplosdev/aplos/pull/47, https://github.com/aplosdev/aplos/pull/61, https://github.com/aplosdev/aplos/pull/66, https://github.com/aplosdev/aplos/pull/70, https://github.com/aplosdev/aplos/pull/76, https://github.com/aplosdev/aplos/pull/79, https://github.com/aplosdev/aplos/pull/87, https://github.com/aplosdev/aplos/pull/123)

- Bump `globals` from 15.8.0 to 16.0.0 (https://github.com/aplosdev/aplos/pull/39, https://github.com/aplosdev/aplos/pull/78, https://github.com/aplosdev/aplos/pull/83, https://github.com/aplosdev/aplos/pull/102, https://github.com/aplosdev/aplos/pull/125, https://github.com/aplosdev/aplos/pull/155)

- Bump `sass` from 1.77.8 to 1.85.1 (https://github.com/aplosdev/aplos/pull/59, https://github.com/aplosdev/aplos/pull/68, https://github.com/aplosdev/aplos/pull/77, https://github.com/aplosdev/aplos/pull/84, https://github.com/aplosdev/aplos/pull/93, https://github.com/aplosdev/aplos/pull/94, https://github.com/aplosdev/aplos/pull/101, https://github.com/aplosdev/aplos/pull/118, https://github.com/aplosdev/aplos/pull/119, https://github.com/aplosdev/aplos/pull/129, https://github.com/aplosdev/aplos/pull/144, https://github.com/aplosdev/aplos/pull/152, https://github.com/aplosdev/aplos/pull/153, https://github.com/aplosdev/aplos/pull/160, https://github.com/aplosdev/aplos/pull/159)

- Bump `@eslint/js` from 9.9.0 to 9.21.0 (https://github.com/aplosdev/aplos/pull/51, https://github.com/aplosdev/aplos/pull/62, https://github.com/aplosdev/aplos/pull/73, https://github.com/aplosdev/aplos/pull/81, https://github.com/aplosdev/aplos/pull/92, https://github.com/aplosdev/aplos/pull/157)

- Bump `eslint` from 9.8.0 to 9.20.1 (https://github.com/aplosdev/aplos/pull/53, https://github.com/aplosdev/aplos/pull/63, https://github.com/aplosdev/aplos/pull/72, https://github.com/aplosdev/aplos/pull/82, https://github.com/aplosdev/aplos/pull/90, https://github.com/aplosdev/aplos/pull/99, https://github.com/aplosdev/aplos/pull/120, https://github.com/aplosdev/aplos/pull/149)

- Bump `vitepress` from 1.3.1 to 1.6.3 for docs (https://github.com/aplosdev/aplos/pull/42, https://github.com/aplosdev/aplos/pull/49, https://github.com/aplosdev/aplos/pull/52, https://github.com/aplosdev/aplos/pull/54, https://github.com/aplosdev/aplos/pull/98, https://github.com/aplosdev/aplos/pull/103, https://github.com/aplosdev/aplos/pull/116, https://github.com/aplosdev/aplos/pull/124, https://github.com/aplosdev/aplos/pull/141, https://github.com/aplosdev/aplos/pull/146)

- Bump `@mdit/plugin-tasklist` from 0.13.0 to 0.16.0 (https://github.com/aplosdev/aplos/pull/55, https://github.com/aplosdev/aplos/pull/109, https://github.com/aplosdev/aplos/pull/133, https://github.com/aplosdev/aplos/pull/136)

- Bump `@mdit/plugin-figure` from 0.13.0 to 0.14.0 (https://github.com/aplosdev/aplos/pull/56, https://github.com/aplosdev/aplos/pull/110)

- Bump `eslint-plugin-vue` from 9.27.0 to 9.33.0 (https://github.com/aplosdev/aplos/pull/57, https://github.com/aplosdev/aplos/pull/86, https://github.com/aplosdev/aplos/pull/91, https://github.com/aplosdev/aplos/pull/95, https://github.com/aplosdev/aplos/pull/111, https://github.com/aplosdev/aplos/pull/162)

- Bump `non.geist` from 1.0.3 to 1.0.4 (https://github.com/aplosdev/aplos/pull/85)

- Bump `inter-ui` from 4.0.2 to 4.1.0 (https://github.com/aplosdev/aplos/pull/127)

- Bump `prettier` from 3.3.3 to 3.5.0 (https://github.com/aplosdev/aplos/pull/128, https://github.com/aplosdev/aplos/pull/150)

#### Documentation

- Add plugins list (Using the upcoming Sencilla plugin)

## [2.5.0] - 2024-07-21

![Bento Grid of version 2.5.0](https://aplos.gxbs.me/images/v2-5-0.png)

### Added

- Add Banners for articles

- Partial rewrite the navigation island

  - New way of centering it
  - Make it allow more items without overflowing
  - Reorganize styles and remove unnecessary ones

- Add `start` and `end` attributes for images

- Redesign `ins` and `del` elements

### Fixed

- Remove SASS deprecation warnings

- Support for `progress` elements style on webkit browsers

### Changed

- Add margins to tables and blockquotes

- Make the blockquotes less rounded

- Make Hashtags to be simply tags (no `#`)

- Add `alt` attribute to icons links

- Make informal cards to use all the available space on the mobile

- Remove the line from the helpful layout if used on articles

- Small style changes to the article navigation

- Make the border left for blockquotes to be `inline-start` (for better RTL support)

- Sort CSS

### Development

#### Changed

- Bump vue from 3.4.31 to 3.4.32 (https://github.com/aplosdev/aplos/pull/33)

- Bump sass from 1.77.6 to 1.77.8 (https://github.com/aplosdev/aplos/pull/32)

#### Documentation

##### Added

- Rewrite the demo page

## [2.4.0] - 2024-07-06

![Bento Grid of version 2.4.0](https://aplos.gxbs.me/images/v2-4-0.png)

### Added

- Support for multiple authors

  - Including in the article list

- Make blog descriptions optional

- Allow a custom title for the navigation

- Make navigation links' URL be provided with `url` not `link` (fallback provided)

- Allow user to customize the date locale (default is `en-US`, rather then `en-GB` as before)

- Align the date collection and the tags perfectly in the article list

### Changed

- Modernize the Article List type logic

- Better support for articles without tags, an author, or a date

- Hide language detection for code snippets inside informal cards

### Fixed

- Code Blocks disappearing on hover

- Fix dark mode for all the types of articles in the Article List component

## [2.3.1] - 2024-07-01

Small dependency updates that were missed in the last release.

### Development

#### Changed

- Reword the Contributing guide

- Bump globals from 15.6.0 to 15.7.0 (https://github.com/aplosdev/aplos/pull/26)

- Bump @eslint/js from 9.5.0 to 9.6.0 (https://github.com/aplosdev/aplos/pull/25)

## [2.3.0] - 2024-07-01

![Bento Grid of version 2.3.0](https://aplos.gxbs.me/images/v2-3-0.png)

### Added

- Add support for a full-width image via the URL (with `#` + `full`)

- Add multiple types of articles

  - Featured
  - Draft
  - Archived
  - And the normal one

- Add the last updated page to the articles

- Add styles for `var` and `tfoot` elements

### Changed

- New default color accent

- Better styles for normal links in the footer

- Make Informal Cards' links use the accent color of the card

- Remove uses mixins that aren't needed and other small changes

- Remove dots from the footer copyright text and Powered by text

## 2.2.0 - 2024-06-22

![Bento Grid of version 2.2.0](https://aplos.gxbs.me/images/v2-2-0.png)

### Added

- Add screenshot support for images via the URL (if the image's URL has a "screenshot" in it, it will be displayed as a screenshot)

- Add footer links

  - And incorporate the "Source Code" and "Made by" links into the footer links

- Add styles for checkboxes

- Add `markdown-it` plugins support for better markdown parsing

- Add support for custom copyright text

- Bring the helpful layout to the Article's Footer

### Changed

- Slightly darker background color for dark mode

- Make a more distinctive style for descriptions in the article's header

- Other minor changes to elements

## [2.1.0] - 2024-06-15

### Added

- More improvements to the `kbd` element

- Restyle the `kbd` element

- Make images pixelated via the URL (with `#` + `pixel`)

- Make the RSS feed link the navigation to download the file linked to the link

- Configurable message

  - After each article
  - After the footer

- Better styling for `ins` and `del` elements

- Styling for `code` tags inside headings

- Add a `style` frontmatter configuration for the `article` layout

### Changed

- Project rebranding

  - New accent color
  - New icon

- Remove link decoration to the articles' footer

- Make the Content Width smaller by default

- Warp text pretty

- Restyle informal cards

  - Make their title be the accent color of the card
  - Make the background color of the cards be slightly more transparent

- Migrate what's possible to the `src` folder

- Make all component styles file begin with an underscore

- Add variables for general styles

  - A huge style cleanup

- Minor changes to the formatter and the linter

### Development

#### Changed

- Add `ESLint` to the project for better code consistency

- Minor changes to the formatter and the linter

## [2.0.2] - 2024-06-05

### Fixed

- Make minimal ignore the `article` configuration

## [2.0.1] - 2024-06-05

### Fixed

- Fix the `main` on smaller screens

## [2.0.0] - 2024-06-05

### Removed

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

### Added

- Rework the informational cards colors

- Provide a non-custom font version of Aplós (`aplos/plain`)

- Provide `style` frontmatter configuration for any page

  - `numeric` for numeric style headings

- Make Icon Links a toggleable option in Configuration

- Add `note` informal card

- Small changes to image behavior

  - Smaller scale when active
  - Max width for images when active
  - Images with a link:
    - Add pointer cursor
    - Make the border thicker when hovering

- Better accessibility for keyboard users

  - With a custom focus indicator

- Add support for various types of elements
  - `progress` for progress bars
  - `samp` for sample output
  - `legend` for legends
  - `q` for inline quotes
  - `u` for trying to replicate grammar mistakes
  - `del` for deleted text
  - `ins` for inserted text

### Changed

- Added a warning that the ActivityPub-based comments aren't currently working

- Add a `custom` folder for custom components

- Remove Layout imports from Aplós Minimal (useless imports)

- Sort imports in Aplós Minimal

- Make Geist Mono/Main Monospace a variable

### Fixed

- Make just the `glitch` class be animated in the Not Found page (instead of all `<span>` elements)

---

### Development

#### Added

- Add `Prettier` to the project for better code consistency (replacing `EditorConfig`)

- Add an [Contributing](https://aplos.gxbs.me/contributing) page for clear steps on how to contribute

#### Changed

- Make everything more <abbr title="Don't Repeat Yourself">DRY</abbr> by using `mixin` in repeated styles

## [1.6.0] - 2024-05-25

### Added

- Add a `no-underline` class to remove the underline from links

- Make the Content's Width adjustable

- Make the "Create a new Issue" button in the Helpful Layout optional

- Provide Modern Font Stacks for the system font stack

- Make "File an Issue" button on the not found page optional

- Make the Not Found page smaller in width by 30%

### Changed

- Migrate the Helpful Layout and the Not Found Layout to the `layouts` folder

- Migrate styles from `index.scss` and `common.scss` to their respective files if they are big enough for better organization

- General cleanup of content and code

- Rebrand the `blog-*` classes to `article-*` classes (the components themselves were already rebranded in 1.5.0)

- Cleanup the Not Found's View Styles

- Add Aplós' version to `index.scss` for better tracking

- Sort Imports

- Sort Styles in Components

---

### Development

#### Changed

- Update Dependencies inside the Development Example

#### Added

- Add `.editorconfig` file for better code consistency

## [1.5.1] - 2024-05-18

### Added

- Unify `color-accent-alpha` dark and light into one variable

## [1.5.0] - 2024-05-11

### Added

- Ability to style images via the URL (with `#` + `not-rounded`, `static`, `small`, `medium`, `shadow`, `mono`, `invert` `blur`, `sepia`, `transparency`)

- Give a title for Table of Contents for better accessibility

- Disable the language detection for code snippets when hovering over them

- Provide the version of Aplós in the footer when hovering over ”Aplós” in ”Powered by”

- Add a "Skip to Content" link for better accessibility, and showing when `Tab` is pressed

- Replace `blog-*` with `article-*` for better naming(_Temporary Fallback is provided_)

- Replace `no-blog` with `minimal` for better naming and understanding (_Temporary Fallback is provided, **but not for the layout**_)

> Fallbacks are provided for the old names, but it is recommended to update the names to the new ones. In 2.0.0, the old names will be removed. The fallbacks are only here to not pump the version to 2.0.0 just for this change.

### Fixed

- Remove the margin from `code` tags inside `pre` tags on mobile

### Changed

- Add a border to link images (with the option to remove it)

- Migrate the body to a grid layout

- Move Layouts to their own folder

- Add underline to the links in the Table of Contents

- Add margin to the links in the Table of Contents

- Update the project details in `index.scss` to match the License

### Development

#### Added

- `.development/default` folder to the repository for easy development and testing (after the issue of the last release)

- `.npmignore` file to ignore the `.development` and `.github` folders

#### Changed

- Pump SASS from 1.76.0 to 1.77.0 (https://github.com/aplosdev/aplos/pull/2)

- Reinstate the ActivityPub comments _(not yet fully implemented)_

  - [x] Migrate script to TypeScript locally
  - [x] Make it run `onMounted`
  - [ ] Fix the build issue

- Allow elements to go over the allocated width
  - [x] Migrate the body to a grid
  - [ ] Provide Grid Templates

## [1.4.1] - 2024-05-05

> This release is important to fix the build process of the project, so update as soon as possible.

### Fixed

- Disable ActivityPub comments (for now, till I find a fix for the errors on the build process)

### Development

#### Changed (WIP)

- A full rework of how ActivityPub comments are handled (to avoid errors on build)

- Allowing elements to go over

## 1.4.0 (2024-05-04)

### Changed

- Remove duplicated styles that are now provided by `normalize.css`

- Provide an easier way to make the time blink in the `time` tag (now using bold instead of `span`)

- Migrate basic font configuration to the `fonts.scss` file (rather than the `index.scss` file)

- Migrate all `pixel` values to `rem` values for better accessibility

### Fixed

- Allow a changeable dark mode background color for code snippets

- Made the navigation island have a specific minimum height (it could become smaller until now)

### Added

- Add ActivityPub support for comments (now you can choose between `activitypub` and `giscus`)

- Provide a `title` for the navigation icons to improve accessibility

- Add two new types of links (`external` and `internal`) with different icons at the end of the link

- Provide a build-in icon for custom cards

## [1.3.3] - 2024-04-27

### Added

- **normalize.css:** Add normalize.css to the project for better cross-browser compatibility

### Changed

- Migrated specific styles from the main SCSS file to its component file

## [1.3.2] - 2024-04-24

### Added

- **spoiler:** Provide a way to show spoilers while blurring the text
