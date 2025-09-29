# Kapwa Design System Theme

## Overview

The Kapwa Design System theme is a comprehensive design token system built with Tailwind CSS v4's `@theme` directive. It provides a complete foundation for consistent design across the BetterGov.ph platform.

## Theme Structure

The Kapwa theme is defined in `src/styles/kapwa.css` using the `@theme kapwa` directive, which allows it to coexist with the existing default theme without conflicts. The project now uses a modular CSS structure:

```
src/
├── styles/
│   ├── index.css      # Default theme + base styles
│   └── kapwa.css      # Kapwa design system theme
```

## Available Tokens

### Typography

- **Font Families**: `--font-family-sans`, `--font-family-mono`, `--font-family-display`
- **Font Sizes**: `--font-size-xs` to `--font-size-9xl` (12px to 128px)
- **Line Heights**: `--line-height-none` to `--line-height-loose`
- **Font Weights**: `--font-weight-thin` to `--font-weight-black`
- **Letter Spacing**: `--letter-spacing-tighter` to `--letter-spacing-widest`

### Colors

- **Primary Colors**: `--color-kapwa-primary-50` to `--color-kapwa-primary-900`
- **Secondary Colors**: `--color-kapwa-secondary-50` to `--color-kapwa-secondary-900`
- **Accent Colors**: `--color-kapwa-accent-50` to `--color-kapwa-accent-900`
- **Semantic Colors**: Success, Warning, Error variants
- **Neutral Colors**: `--color-kapwa-gray-50` to `--color-kapwa-gray-900`
- **Surface Colors**: `--color-kapwa-surface-50` to `--color-kapwa-surface-900`

### Spacing

- **Spacing Scale**: `--spacing-0` to `--spacing-96` (0 to 384px)
- **Border Radius**: `--radius-none` to `--radius-3xl` and `--radius-full`
- **Border Width**: `--border-width-0` to `--border-width-8`

### Shadows

- **Shadow Scale**: `--shadow-xs` to `--shadow-2xl` plus `--shadow-inner` and `--shadow-none`

### Layout

- **Z-Index**: `--z-index-0` to `--z-index-50` plus `--z-index-auto`
- **Opacity**: `--opacity-0` to `--opacity-100`

### Animation

- **Durations**: `--duration-75` to `--duration-1000`
- **Easing**: `--ease-linear`, `--ease-in`, `--ease-out`, `--ease-in-out`, `--ease-bounce`, `--ease-spring`

## Usage

### In CSS

```css
.my-component {
  background-color: var(--color-kapwa-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### In Tailwind Classes

```html
<div class="bg-kapwa-primary-500 p-4 rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-kapwa-primary-700">Kapwa Design System</h1>
</div>
```

### In React Components

```tsx
<div className='bg-kapwa-primary-500 p-4 rounded-lg shadow-md'>
  <h1 className='text-2xl font-bold text-kapwa-primary-700'>
    Kapwa Design System
  </h1>
</div>
```

## Theme Demo

To see the Kapwa theme in action:

1. **Storybook**: Visit `http://localhost:6006` and navigate to "Kapwa/Design System"
2. **Design Guide**: Visit `http://localhost:5173` and go to the Design Guidelines page
3. **Component Demo**: Use the `KapwaThemeDemo` component in your own pages

## Benefits

1. **Consistency**: All design tokens follow a systematic naming convention
2. **Scalability**: Easy to add new tokens or modify existing ones
3. **Maintainability**: Centralized token management
4. **Flexibility**: Works alongside existing themes without conflicts
5. **Type Safety**: Full TypeScript support
6. **Documentation**: Comprehensive Storybook stories and examples

## Migration from Existing Theme

The Kapwa theme is designed to work alongside the existing theme. To migrate:

1. **Gradual Migration**: Replace existing color classes with Kapwa equivalents
2. **Prefix Usage**: Use `kapwa-` prefixed classes (e.g., `bg-kapwa-primary-500`)
3. **Token Reference**: Use CSS custom properties for custom implementations

## Examples

### Button Component

```tsx
<button className='px-6 py-3 bg-kapwa-primary-500 text-white rounded-lg font-medium hover:bg-kapwa-primary-600 transition-colors duration-200'>
  Primary Button
</button>
```

### Card Component

```tsx
<div className='p-6 bg-white rounded-xl border border-kapwa-gray-200 shadow-base'>
  <h3 className='text-lg font-semibold text-kapwa-gray-800 mb-2'>Card Title</h3>
  <p className='text-kapwa-gray-600'>Card content using Kapwa tokens</p>
</div>
```

### Typography Scale

```tsx
<h1 className="text-6xl font-black text-kapwa-primary-600">Display Heading</h1>
<h2 className="text-4xl font-bold text-kapwa-primary-700">Large Heading</h2>
<h3 className="text-2xl font-semibold text-kapwa-primary-800">Medium Heading</h3>
<p className="text-lg text-kapwa-gray-700">Body text large</p>
<p className="text-base text-kapwa-gray-800">Body text regular</p>
<p className="text-sm text-kapwa-gray-600">Small text</p>
```

## Contributing

When adding new tokens to the Kapwa theme:

1. Follow the existing naming convention
2. Add comprehensive documentation
3. Include examples in Storybook
4. Test across different components
5. Update this documentation

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Design Token Best Practices](https://spectrum.adobe.com/page/design-tokens/)
- [Storybook Documentation](https://storybook.js.org/docs)
