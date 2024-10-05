---
layout: helpful
---

# Contributing

Thank you for considering contributing to Aplós! This project is open-source and welcomes contributions from everyone. By participating, you are expected to uphold this [code of conduct](/contributing/code-of-conduct).

## Getting Started

If you're new to contributing to open-source projects, you can start by checking out the [GitHub documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests) on how to contribute to a project.

## Recommended Guidelines

**They are mandatory, but they are recommended to make the contribution process smoother.**

- Ensure that your pull request is up-to-date with the `main` branch.

- Make sure that your code is well-documented and follows the [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/).

The formatting is done automatically with [Prettier](https://prettier.io) and [ESLint](https://eslint.org), so you don't have to worry about that :smile:.

## Contributing to the Main Repository (`aplosdev/aplos`)

If you want to contribute to Aplós, make sure to fork the repository and cloned it with `git clone` or `gh repo clone`.

After cloning the repository, you can install the dependencies with the following command:

```bash
pnpm install
```

If you want a development server, you can directly run the Docs for development using the following command:

```bash
pnpm docs:dev
```

You can edit the project and see your changes live.

All other standard VitePress commands are available, like `pnpm demo:build` and `pnpm demo:preview`.

## Adding an Boost (Plugin)

Check the [Boosts](https://github.com/aplosdev/boosts) repository to see how to add a new Boost to Aplós.
