# Custom Icons Guidelines

To ensure custom icons work correctly with Nuxt Icon and `@nuxt/ui`, follow these rules:

## 1. Naming Convention
Always use the `:` separator between the collection prefix and the icon name.
- **Correct**: `i-custom:check-circle`
- **Incorrect**: `i-custom-check-circle` (causes ambiguity when both have hyphens)

## 2. SVG Preparation
Icons are rendered as CSS masks by default. For them to be styleable via Tailwind `text-` classes:
- Change all `fill="#HEX"` or `stroke="#HEX"` to `fill="currentColor"` or `stroke="currentColor"`.
- Remove hardcoded `width` and `height` attributes if you want them to be controlled by CSS (though `viewBox` is required).

## 3. Usage
Apply color using Tailwind classes on the `UIcon` component:
```vue
<UIcon name="i-custom:my-icon" class="text-emerald-600" />
```
