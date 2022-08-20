module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  content: [`./src/**/*.html`, `./src/**/*.tsx`, `./src/**/*.jsx`, `./src/**/*.scss`, `./src/**/*.css`],
  variants: {},
  plugins: [],
  theme: {
    extend: {
      screens: {
        xs: `320px`,
      },
    },
  },
};
