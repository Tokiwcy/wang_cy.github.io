# Chenyang Wang — Academic Website

A lightweight, responsive academic homepage designed for GitHub Pages.

## Files

- `index.html` — all page content
- `styles.css` — site styling
- `script.js` — mobile menu and small interactions
- `.nojekyll` — tells GitHub Pages to serve the static files directly

## Before publishing

Open `index.html` and replace the three placeholder buttons:

- `CV`
- `GitHub`
- `Google Scholar`

Search for `data-placeholder-link` to find them quickly.

If you want the CV hosted on the site, put your PDF in this folder as `cv.pdf` and change the CV link to:

```html
<a class="button subtle" href="cv.pdf">CV</a>
```

## Publish with GitHub Pages

1. Create a public GitHub repository named `<your-github-username>.github.io`.
2. Upload all files in this folder to the repository root.
3. Commit and push.
4. Open `https://<your-github-username>.github.io`.

If you use a differently named repository, enable GitHub Pages in **Settings → Pages** and deploy from the `main` branch.

## Suggested next edits

- Add your real GitHub and Google Scholar links.
- Add `cv.pdf`.
- Add paper links once manuscripts are public.
- Optionally replace the `CW` monogram with a headshot later.
