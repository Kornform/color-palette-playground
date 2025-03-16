# Semantic Color Token Guide

This guide explains our design system's color tokens and how they support both dark and light themes with CSS variables and Tailwind integration.

## Why Semantic Color Tokens?

Semantic tokens describe the _purpose_ of a color rather than its visual appearance. This creates a flexible system that:

1. **Supports both dark and light themes** with a single set of token names
2. **Improves maintainability** by centralizing color values
3. **Creates consistency** across the UI
4. **Makes theme switching seamless**
5. **Integrates with Tailwind CSS** for utility-based styling

## Base Colors

These tokens define the primary surfaces and backgrounds:

| Token                      | Purpose                        | Dark Theme | Light Theme |
| -------------------------- | ------------------------------ | ---------- | ----------- |
| `--color-bg-primary`       | Main background color          | #18181c    | #f8f9fa     |
| `--color-bg-secondary`     | Card and component backgrounds | #26262b    | #ffffff     |
| `--color-bg-tertiary`      | Elevated components            | #2f2f36    | #f0f0f5     |
| `--color-bg-button`        | Button backgrounds             | #3a3a44    | #e9ecef     |
| `--color-bg-button-hover`  | Button hover state             | #474752    | #dee2e6     |
| `--color-bg-button-active` | Button active state            | #52525e    | #ced4da     |

## Text Colors

Consistent text colors maintain readability across themes:

| Token                    | Purpose        | Dark Theme               | Light Theme            |
| ------------------------ | -------------- | ------------------------ | ---------------------- |
| `--color-text-primary`   | Main text      | rgba(255, 255, 255, 0.9) | rgba(33, 37, 41, 0.95) |
| `--color-text-secondary` | Secondary text | rgba(255, 255, 255, 0.7) | rgba(33, 37, 41, 0.75) |
| `--color-text-disabled`  | Disabled text  | rgba(255, 255, 255, 0.4) | rgba(33, 37, 41, 0.4)  |

## Secondary Button Colors

Colors specifically for secondary button styles:

| Token                             | Purpose              | Dark Theme | Light Theme |
| --------------------------------- | -------------------- | ---------- | ----------- |
| `--color-button-secondary`        | Secondary button     | #c4c4c4    | #6c757d     |
| `--color-button-secondary-hover`  | Secondary btn hover  | #e0e0e0    | #5a6268     |
| `--color-button-secondary-active` | Secondary btn active | #e8e8e8    | #495057     |

## Accent Colors

Accent colors with their variants remain consistent across themes for brand identity:

### Blue

| Token                        | Purpose      | Value                  |
| ---------------------------- | ------------ | ---------------------- |
| `--color-accent-blue`        | Default      | #00d4f7                |
| `--color-accent-blue-hover`  | Hover state  | #7ae1f0                |
| `--color-accent-blue-active` | Active state | #a2e8eb                |
| `--color-accent-blue-subtle` | Subtle bg    | rgba(0, 212, 247, 0.1) |

### Red

| Token                       | Purpose      | Value                  |
| --------------------------- | ------------ | ---------------------- |
| `--color-accent-red`        | Default      | #ff5257                |
| `--color-accent-red-hover`  | Hover state  | #ff7f83                |
| `--color-accent-red-active` | Active state | #ffacaf                |
| `--color-accent-red-subtle` | Subtle bg    | rgba(255, 82, 87, 0.1) |

### Purple

| Token                          | Purpose      | Value                    |
| ------------------------------ | ------------ | ------------------------ |
| `--color-accent-purple`        | Default      | #a179fa                  |
| `--color-accent-purple-hover`  | Hover state  | #b293f8                  |
| `--color-accent-purple-active` | Active state | #cabefc                  |
| `--color-accent-purple-subtle` | Subtle bg    | rgba(161, 121, 250, 0.1) |

### Green

| Token                         | Purpose      | Value                   |
| ----------------------------- | ------------ | ----------------------- |
| `--color-accent-green`        | Default      | #25b667                 |
| `--color-accent-green-hover`  | Hover state  | #44cc7f                 |
| `--color-accent-green-active` | Active state | #6bd294                 |
| `--color-accent-green-subtle` | Subtle bg    | rgba(37, 182, 103, 0.1) |

### Yellow

| Token                          | Purpose      | Value                   |
| ------------------------------ | ------------ | ----------------------- |
| `--color-accent-yellow`        | Default      | #eabb0f                 |
| `--color-accent-yellow-hover`  | Hover state  | #ecc734                 |
| `--color-accent-yellow-active` | Active state | #efc959                 |
| `--color-accent-yellow-subtle` | Subtle bg    | rgba(234, 187, 15, 0.1) |

## Border Colors

| Token                   | Purpose           | Dark Theme               | Light Theme        |
| ----------------------- | ----------------- | ------------------------ | ------------------ |
| `--color-border-light`  | Subtle separators | rgba(255, 255, 255, 0.1) | rgba(0, 0, 0, 0.1) |
| `--color-border-medium` | Stronger borders  | rgba(255, 255, 255, 0.2) | rgba(0, 0, 0, 0.2) |

## Shadow Tokens

Shadows provide depth and elevation:

| Token             | Purpose        | Dark Theme                     | Light Theme                     |
| ----------------- | -------------- | ------------------------------ | ------------------------------- |
| `--shadow-small`  | Subtle shadows | 0 2px 4px rgba(0, 0, 0, 0.2)   | 0 2px 4px rgba(0, 0, 0, 0.075)  |
| `--shadow-medium` | Medium depth   | 0 4px 8px rgba(0, 0, 0, 0.3)   | 0 4px 8px rgba(0, 0, 0, 0.1)    |
| `--shadow-large`  | High elevation | 0 10px 20px rgba(0, 0, 0, 0.4) | 0 10px 20px rgba(0, 0, 0, 0.15) |

## Using Tokens with CSS

Always reference tokens by their semantic purpose:

```css
/* Good - uses semantic tokens */
.alert {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-accent-red);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-small);
}

/* Bad - hardcoded colors */
.alert {
  background-color: #26262b;
  border: 1px solid #ff5257;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Using Tokens with Tailwind CSS

Our design system integrates with Tailwind through the `tailwind.config.js`:

```html
<!-- With CSS variables -->
<div class="bg-bg-secondary text-text-primary border border-accent-red shadow-sm">Alert content</div>

<!-- Using accent colors -->
<button class="bg-accent-blue hover:bg-accent-blue-hover text-bg-primary">Submit</button>
```

The Tailwind configuration maps our tokens to convenient utility classes:

```js
// Example mapping in tailwind.config.js
colors: {
  'bg-primary': 'var(--color-bg-primary)',
  'bg-secondary': 'var(--color-bg-secondary)',
  'text-primary': 'var(--color-text-primary)',
  // ... more mappings
  accent: {
    blue: 'var(--color-accent-blue)',
    'blue-hover': 'var(--color-accent-blue-hover)',
    // ... more accent colors
  }
}
```

## Theme Switching

To implement theme switching, add the `data-theme` attribute to the root element:

```html
<!-- Dark theme (default) -->
<html>
  <!-- content -->
</html>

<!-- Light theme -->
<html data-theme="light">
  <!-- content -->
</html>
```

JavaScript for theme toggling:

```js
// Toggle between dark and light themes
document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", currentTheme === "light" ? "" : "light");
});
```

## Best Practices

1. **Always use semantic tokens** instead of hardcoded colors
2. **Select tokens by purpose**, not by visual appearance
3. **For component-specific needs**, create local tokens that reference the global tokens
4. **Use Tailwind's utilities** when possible for consistency
5. **Test both themes** regularly during development
