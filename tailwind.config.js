module.exports = {
  purge: [`./src/**/*.js`, `./src/**/*.jsx`, `./src/**/*.ts`, `./src/**/*.tsx`],
  theme: {
    extend: {
      screens: {
        xs: `310px`,
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
