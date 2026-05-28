export default defineAppConfig({
  ui: {
    colors: {
      primary: 'black',
      neutral: 'zinc',
    },
    button: {
      slots: {
        base: 'rounded-full',
      },
      defaultVariants: {
        size: 'lg',
      },
    },

    input: {
      slots: {
        base: 'rounded-radius-s',
      },
      defaultVariants: {
        size: 'xl',
      },
    },
    header: {
      slots: {
        root: 'border-none mb-4 bg-surface-secondary',
      },
    },
    container: {
      base: 'max-w-[1344px]',
    },
  },
})
