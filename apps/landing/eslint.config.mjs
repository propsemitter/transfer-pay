import antfu from '@antfu/eslint-config'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    vue: true,
    nuxt: true,
    typescript: true,
    editor: false,
  },
  betterTailwindcss.configs.recommended,
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
      },
    },
    rules: {
      'no-console': 'warn',
      'better-tailwindcss/no-unknown-classes': 'off',
    },
  },
)
