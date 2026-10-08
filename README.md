# Kapwa Design System

_Design system for Government Portals used by BetterGov.ph_

## Installation

Use the npm package for application adoption. This keeps your app connected to future Kapwa component, style, token, and accessibility updates through normal package upgrades.

### Recommended: npm package

Install Kapwa:

```bash
npm install @bettergov/kapwa@latest
```

If you want animation utilities:

```bash
npm install -D tw-animate-css
```

Add Kapwa to your CSS entrypoint:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@source './node_modules/@bettergov/kapwa';
@import '@bettergov/kapwa/kapwa.css';
```

The `@bettergov/kapwa/kapwa.css` import loads Kapwa tokens and utilities. The `@source` line is required so Tailwind can detect classes used inside Kapwa's published components.

Import components from the package:

```tsx
import { Button } from '@bettergov/kapwa/button';
```

You can also import from the root package export:

```tsx
import { Button } from '@bettergov/kapwa';
```

### Shadcn registry

The shadcn registry is available for testing and source-copy workflows, but it is not the main installation path right now.

Use it only if you intentionally want to copy component source into your app and own those files yourself. Copied files do not automatically receive future Kapwa fixes through a package upgrade.

If you are testing the registry, your app still needs the Kapwa CSS entrypoint shown above.

### Fonts

It's better to have consumers load Kapwa's fonts themselves because:

- Frameworks like Next.js, Nuxt, Remix, and SvelteKit already expose optimized font-loading primitives (streaming, preloading, inlining) that outperform any generic bundler configuration we could ship.
- Hosting the font files within your project keeps them versioned alongside your design tokens so you can subset, swap formats, or fall back safely without waiting for a design-system release.
- Self-hosting lets you control caching headers and domains, reducing layout shifts caused by cross-origin font requests and keeping Core Web Vitals happy.
- You can omit fonts you do not use (e.g., only regular weights) which shrinks page weight for users on low-bandwidth connections.

**Next.js App Router**

```ts
// app/fonts.ts
import { Inter, Roboto_Mono } from 'next/font/google';

export const kapwaSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kapwa-sans',
  display: 'swap',
});

export const kapwaMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-kapwa-mono',
  display: 'swap',
});
```

```tsx
// app/layout.tsx
import { kapwaSans, kapwaMono } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${kapwaSans.variable} ${kapwaMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
```

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@source './node_modules/@bettergov/kapwa';
@import '@bettergov/kapwa/kapwa.css';

@theme inline {
  --font-sans: var(--font-kapwa-sans);
  --font-mono: var(--font-kapwa-mono);
}
```

**Vite or plain React**

```css
/* src/fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap');

:root {
  --font-kapwa-sans:
    'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  --font-kapwa-mono:
    'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}

body {
  font-family: var(--font-kapwa-sans);
}

code,
pre {
  font-family: var(--font-kapwa-mono);
}
```

```ts
// src/main.tsx
import './fonts.css';
import '@bettergov/kapwa/kapwa.css';
```

For the full adoption guide, read [Installation](./docs/guides/installation.md).

---

## Resources

- [Figma: KAPWA Styles](https://www.figma.com/design/GbxLRVkVHA6JFlcBULZKRQ/KAPWA--Styles) for the design styles and tokens
- [Wiki](https://github.com/bettergovph/kapwa/wiki) for design values and project notes
- [Using Storybook](./docs/guides/using-storybook.md) for the component reference

### Storybook and the a11y tab

Storybook is the component reference for Kapwa. Start it locally with:

```bash
npm run dev:storybook
```

Then open [http://localhost:6006](http://localhost:6006). Every story has an **Accessibility** (a11y) tab, powered by `@storybook/addon-a11y`, that runs axe-core checks against the rendered component and lists any violations. Check it whenever you add or change a component.

---

## Why We're Building This Project

## Our Mission

Please refer to [Design Values](https://github.com/bettergovph/kapwa/wiki/Design-Values).

## Join Us as a Volunteer

We're always looking for passionate individuals to help improve BetterGov.ph. We need volunteers with various skills:

- Frontend and backend developers
- UX/UI designers
- Content writers and editors
- Translators (for Filipino and other local languages)
- Accessibility experts
- Project managers
- QA testers

If you're interested in contributing, please reach out to us at [volunteers@bettergov.ph](mailto:volunteers@bettergov.ph) or open an issue in this repository.

## Code of Conduct

We are committed to fostering a welcoming and respectful community.
Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

## Contributing

We welcome contributions from everyone!
Please see our [Contributing Guide](./docs/guides/contributing.md) for details on:

- Development setup
- Reporting bugs
- Opening issues and pull requests

## Contributors

Thanks to all the people who already contributed!

<a href="https://github.com/bettergovph/kapwa/graphs/contributors">
    <img src="https://contributors-img.web.app/image?repo=bettergovph/kapwa&max=750&columns=20" />
</a>

## License

This project is released under the [Creative Commons CC0](https://creativecommons.org/publicdomain/zero/1.0/) dedication. This means the work is dedicated to the public domain and can be freely used by anyone for any purpose without restriction under copyright law.

---
