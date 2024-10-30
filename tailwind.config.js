/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bug: {
          light: '#A7B723',
          dark: '#1F210B',
          'text-light': '#A7B723',
          'text-dark': '#1F210B',
        },
        dark: {
          light: '#75574C',
          dark: '#1F1714',
          'text-light': '#75574C',
          'text-dark': '#1F1714',
        },
        dragon: {
          light: '#7037FF',
          dark: '#0D0620',
          'text-light': '#7037FF',
          'text-dark': '#0D0620',
        },
        electric: {
          light: '#F9CF30',
          dark: '#322A09',
          'text-light': '#F9CF30',
          'text-dark': '#322A09',
        },
        fairy: {
          light: '#E69EAC',
          dark: '#312124',
          'text-light': '#E69EAC',
          'text-dark': '#312124',
        },
        fighting: {
          light: '#C12239',
          dark: '#1C0508',
          'text-light': '#C12239',
          'text-dark': '#1C0508',
        },
        fire: {
          light: '#F57D31',
          dark: '#251205',
          'text-light': '#F57D31',
          'text-dark': '#251205',
        },
        flying: {
          light: '#A891EC',
          dark: '#29233A',
          'text-light': '#A891EC',
          'text-dark': '#29233A',
        },
        ghost: {
          light: '#70559B',
          dark: '#1B1426',
          'text-light': '#70559B',
          'text-dark': '#1B1426',
        },
        grass: {
          light: '#74CB48',
          dark: '#203913',
          'text-light': '#74CB48',
          'text-dark': '#203913',
        },
        normal: {
          light: '#b1b1b1',
          dark: '#500000',
          'text-light': '#b1b1b1',
          'text-dark': '#373737',
        },
        ground: {
          light: '#DEC16B',
          dark: '#372F19',
          'text-light': '#DEC16B',
          'text-dark': '#372F19',
        },
        ice: {
          light: '#9AD6DF',
          dark: '#25373A',
          'text-light': '#9AD6DF',
          'text-dark': '#25373A',
        },
        poison: {
          light: '#A43E9E',
          dark: '#2C0F2B',
          'text-light': '#A43E9E',
          'text-dark': '#2C0F2B',
        },
        psychic: {
          light: '#FB5584',
          dark: '#2D0E17',
          'text-light': '#FB5584',
          'text-dark': '#2D0E17',
        },
        rock: {
          light: '#B69E31',
          dark: '#322B0C',
          'text-light': '#B69E31',
          'text-dark': '#322B0C',
        },
        steel: {
          light: '#B7B9D0',
          dark: '#2C2D33',
          'text-light': '#B7B9D0',
          'text-dark': '#2C2D33',
        },
        water: {
          light: '#6493EB',
          dark: '#11182D',
          'text-light': '#6493EB',
          'text-dark': '#11182D',
        },
        primary:"#DC0A2D",
      },

      screens: {
        'sm': '640px',   // Small devices (phones, 640px and up)
        'md': '768px',   // Medium devices (tablets, 768px and up)
        'lg': '1024px',  // Large devices (desktops, 1024px and up)
        'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // 2xl devices (larger desktops, 1536px and up)
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-30px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        shake: 'shake 2s ease-in-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out', // Adjust duration and easing as needed
      },
      borderRadius: {
        '5': '5px', // Adds the custom rounded-5 class with 5px border-radius
      },
    },
  },
  plugins: [],
}
