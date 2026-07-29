## This is a Vitepress project

This guide assumes no prior knowledge and aims to help new Koha testers and developers get started using Koha Testing Docker with Windows Subsytem for Linux (WSL2) and VSCode.

Don't forget to refer to the [official Koha Testing Docker README](https://gitlab.com/koha-community/koha-testing-docker/-/blob/main/README.md) too.

TODO: How to run this repo locally and contribute

## Building and deploying

The site's build fetches live data from Bugzilla's API, which isn't reliably
reachable from GitHub Actions. Because of that, the site is built and
deployed locally instead of in CI:

```
yarn deploy
```

This builds the site and pushes `.vitepress/dist` to the `gh-pages` branch
(via the [gh-pages](https://www.npmjs.com/package/gh-pages) package), which
GitHub Pages is configured to serve from directly - Settings > Pages >
Source > "Deploy from a branch" > `gh-pages`. `.vitepress/dist` itself is
never committed to `main`.
