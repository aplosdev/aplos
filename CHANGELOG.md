## 1.5.1 (unreleased)

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
