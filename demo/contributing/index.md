---
layout: helpful
---

# Contributing

Thank you for considering contributing to Aplós! This project is open-source and
welcomes contributions from everyone. By participating, you are expected to
uphold this [code of conduct](/contributing/code-of-conduct).

## Getting Started

If you're new to contributing to open-source projects, you can start by checking
out the
[GitHub documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests)
on how to contribute to a project.

## Recommended Guidelines

**They are mandatory, but they are recommended to make the contribution process
smoother.**

- Ensure that your pull request is up-to-date with the `main` branch.

- Make sure that your code is well-documented and follows the
  [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/).

Formatting and linting are handled by Deno, so you don't have to worry about
that :smile:.

## Contributing to the Main Repository (`aplosdev/aplos`)

If you want to contribute to Aplós, make sure to fork the repository and cloned
it with `git clone` or `gh repo clone`.

After cloning the Steno theme repository, run the complete check:

```bash
deno task check
```

To run the documentation fixture in development mode:

```bash
deno task dev
```

You can edit the project and see your changes live.

Other available tasks include `deno task build`, `deno task preview`, and
`deno task doctor`.
