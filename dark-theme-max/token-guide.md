# Semantic Color Token Guide

This document explains the naming system for our theme's color tokens and how they support both dark and light themes.

## Why Semantic Color Tokens?

Semantic tokens describe the _purpose_ of a color rather than its visual appearance. This creates a flexible system that:

1. **Supports both dark and light themes** with a single set of token names
2. **Improves maintainability** by centralizing color values
3. **Creates consistency** across the UI
4. **Makes theme switching seamless**

## Base Colors

These tokens define the primary surfaces and interactions in the interface:

| Token                      | Purpose                        | Dark Theme | Light Theme |
| -------------------------- | ------------------------------ | ---------- | ----------- |
| `--color-bg-primary`       | Main background color          | #1a1a1e    | #f8f9fa     |
| `--color-bg-secondary`     | Card and component backgrounds | #27272c    | #ffffff     |
| `--color-bg-tertiary`      | Elevated components            | #303038    | #f0f0f5     |
| `--color-bg-button`        | Button backgrounds             | #3a3a43    | #e9ecef     |
| `--color-bg-button-hover`  | Button hover state             | #45454e    | #dee2e6     |
| `--color-bg-button-active` | Button active state            | #505059    | #ced4da     |

## Text Colors

Consistent text colors maintain readability across themes:

| Token                    | Purpose        | Dark Theme               | Light Theme            |
| ------------------------ | -------------- | ------------------------ | ---------------------- |
| `--color-text-primary`   | Main text      | rgba(255, 255, 255, 0.9) | rgba(33, 37, 41, 0.95) |
| `--color-text-secondary` | Secondary text | rgba(255, 255, 255, 0.7) | rgba(33, 37, 41, 0.75) |
| `--color-text-disabled`  | Disabled text  | rgba(255, 255, 255, 0.4) | rgba(33, 37, 41, 0.4)  |

## Accent Colors

Accent colors remain consistent across themes for brand identity:

| Token                   | Purpose                        | Value   |
| ----------------------- | ------------------------------ | ------- |
| `--color-accent-blue`   | Primary brand color (Cyan)     | #00ddff |
| `--color-accent-red`    | Error states, warnings (Coral) | #ff5a5f |
| `--color-accent-purple` | Alternative accent (Lavender)  | #ad8df9 |

Each accent color also has variants: `-hover`, `-active`, and `-subtle`.

## Border Colors

| Token                   | Purpose           | Dark Theme               | Light Theme        |
| ----------------------- | ----------------- | ------------------------ | ------------------ |
| `--color-border-light`  | Subtle separators | rgba(255, 255, 255, 0.1) | rgba(0, 0, 0, 0.1) |
| `--color-border-medium` | Stronger borders  | rgba(255, 255, 255, 0.2) | rgba(0, 0, 0, 0.2) |

## How to Use These Tokens

1. **Never use hardcoded colors** in your CSS. Always reference a token.
2. **Select tokens by purpose**, not by visual appearance.
3. **For one-off components**, create component-specific tokens that reference these base tokens.

## Example:

```css
/* Good - uses semantic tokens */
.alert {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-accent-red);
  color: var(--color-text-primary);
}

/* Bad - hardcoded colors */
.alert {
  background-color: #27272c;
  border: 1px solid #ff5a5f;
  color: white;
}
```

## Adding Theme Support

To implement theme switching, simply add the `data-theme` attribute to the root element:

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

The CSS will automatically apply the appropriate color values based on the theme attribute.
