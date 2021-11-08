var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    ({ addUtilities, e, theme, variants }) => {
      let colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];

      // Replace or Add custom colors
      if (this.theme?.extend?.colors !== undefined) {
        colors = Object.assign(colors, this.theme.extend.colors);
      }

      const colorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: { borderTopColor: colors[color] },
          [`.border-r-${color}`]: { borderRightColor: colors[color] },
          [`.border-b-${color}`]: { borderBottomColor: colors[color] },
          [`.border-l-${color}`]: { borderLeftColor: colors[color] },
        }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    }
  ],
}
