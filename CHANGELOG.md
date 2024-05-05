## 1.4.1 (2024-05-05)

> This release is important to fix the build process of the project, so update as soon as possible.

### Fix(es)

- Disable ActivityPub comments (for now, till I find a fix for the errors on the build process)

### Work in Progress Element(s)

- A full rework of how ActivityPub comments are handled (to avoid errors on build)

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
