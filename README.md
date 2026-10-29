# SELENE — Watch the Earth rise

A responsive, one-page fictional lunar expedition website built with React 19, TypeScript, Vite 6, Tailwind CSS v4 and Lenis. The site uses locally bundled SVG illustrations, so it does not depend on a third-party image CDN.

## Run on Windows (VS Code)

1. Install Node.js 20 LTS or newer from https://nodejs.org/ if it is not installed.
2. Extract this ZIP to a folder such as `C:\Users\YourName\Documents\selene-project`.
3. Open that folder in VS Code (`File → Open Folder`).
4. Open `Terminal → New Terminal`.
5. Run `npm install` and wait for it to finish.
6. Run `npm run dev`.
7. Open the local URL shown in the terminal (usually `http://localhost:3006`).

## Checks

- `npm run lint` — TypeScript checks
- `npm run build` — production build
- `npm run preview` — preview the production build

## Notes

The source prompt provided in chat ended part-way through `Chrome.tsx` and did not include the remaining component files. This is a complete, original implementation following its design brief and required stack, not a byte-identical reconstruction of the missing source. The original asset archive could not be retrieved in this environment, so the project includes locally created SVG artwork instead of the referenced WebP photographs. The waitlist form is a front-end demo: it does not send or store personal data.
