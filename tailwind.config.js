module.exports = {
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.aluminumlightest'),
          h1: {
            color: theme('colors.aluminumlightest')
          },
          h2: {
            color: theme('colors.aluminumlightest')
          },
          h3: {
            color: theme('colors.aluminumlightest')
          }
        }
      },
    }),
    extend: {
      fontFamily: {
        'sans': ['Jost'],
        // 'palmcanyon': ['PalmCanyonDrive'],
        // 'nighthawk': ['NightHawk'],
        // 'galada': ['Galada'],
        // 'unica': ['Unica One'],
        // 'flott': ['FlottFlott'],
        // 'pretendo': ['Pretendo'],
        // 'nintend': ['Nintend'],
        'storefront': ['Storefront'],
        'syncopate': ['Syncopate'],
        'holtzman': ['Holtzman'],
        // 'oblady': ['Oblady'],
        // 'russo': ['Russo One'],
        // 'nunitosans': ['Nunito Sans'],
        // 'jost': ['Jost']
      },
      colors: {
        silver: '#d5d5d7',
        aluminumlightest: '#F9FAFB',
        aluminumlight: '#DCE0E4',
        aluminum: '#d0d5db',
        aluminumdark: '#B6BAC0',
        // aluminumdarker: '#a0aab6',
        aluminumdarker: '#9CA0A4',
        plaster: '#f5f2e9',
        wheat: '#c4b5a5',
        sand: '#a68b76',
        ash: '#6d6a68',
        coal: '#291425',
        tomato: '#e34b2a',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
