module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '75ch': `75ch`,
      },
    },
    fontFamily: {
      // heading: [`Cormorant Garamond`, `serif`],
      // heading: [`Merriweather Sans`, `sans-serif`],
    },
  },
  variants: {
    // backgroundColor: [`hover`, `focus`, `dark`, `light`],
    // borderColor: [`hover`, `focus`, `dark`, `light`],
    // textColor: [`hover`, `focus`, `dark`, `light`],
  },
  plugins: [
    // https://github.com/jack-pallot/tailwindcss-accessibility
    // add .sr-only .sr-only-focusable
    require(`tailwindcss-accessibility`),
    // from https://github.com/ChanceArthur/tailwindcss-dark-mode
    // ({ addVariant, e }) => {
    //   addVariant('dark', ({ modifySelectors, separator }) =>
    //     modifySelectors(
    //       ({ className }) => `body.dark .${e(`dark${separator}${className}`)}`
    //     )
    //   )
    //   addVariant('light', ({ modifySelectors, separator }) =>
    //     modifySelectors(
    //       ({ className }) => `body.light .${e(`light${separator}${className}`)}`
    //     )
    //   )
    // },
  ],
}
