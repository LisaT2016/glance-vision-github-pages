# Glance Vision

A single-page Glance Vision landing site configured for static hosting on GitHub Pages.

## Build locally

Requires Node.js 20 or newer.

```sh
npm install
npm run build
```

The static site is written to `.output/public/`, with the homepage at `.output/public/index.html`. No application server is needed after the build.

To check the production files locally, serve that directory with any static file server. The site uses the base path `/gvweb2026/` to match its GitHub repository name.

## Deploy to GitHub Pages

1. Create or open a repository named `gvweb2026` and upload this project, including the `.github` directory.
2. Push the files to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select the `gh-pages` branch and `/ (root)` after the first workflow run.
5. The workflow in `.github/workflows/deploy.yml` builds and publishes `.output/public` automatically on every push to `main`.

The site will be available at `https://<your-github-username>.github.io/gvweb2026/`.
