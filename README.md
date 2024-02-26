<div align="center">
<h1>Aplós - Theme</h1>
Aplós, but just the theme files, as a Git Submodule.
</div>

> [!IMPORTANT]
As I said above, this repo is just for these theme files for Git Submodule. For the actual Aplós Project check [GabsEdits/aplos](https://github.com/GabsEdits/aplos)

## Usage
First, Init the Submodules:
```sh
git submodule init
```

Then, add the theme to the `pages/.vitepress/theme` directory:
```sh
git submodule add https://github.com/GabsEdits/aplos-theme.git pages/.vitepress/theme
```

### Update
To update the theme run this command:

```bash
git submodule update --remote --merge
```
