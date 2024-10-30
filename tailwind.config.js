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
          dark: '#75574C',
          'text-light': '#75574C',
          'text-dark': '#75574C',
        },
        dragon: {
          light: '#7037FF',
          dark: '#7037FF',
          'text-light': '#7037FF',
          'text-dark': '#7037FF',
        },
        electric: {
          light: '#F9CF30',
          dark: '#F9CF30',
          'text-light': '#F9CF30',
          'text-dark': '#F9CF30',
        },
        fairy: {
          light: '#E69EAC',
          dark: '#E69EAC',
          'text-light': '#E69EAC',
          'text-dark': '#E69EAC',
        },
        fighting: {
          light: '#C12239',
          dark: '#C12239',
          'text-light': '#C12239',
          'text-dark': '#C12239',
        },
        fire: {
          light: '#F57D31',
          dark: '#251205',
          'text-light': '#F57D31',
          'text-dark': '#251205',
        },
        flying: {
          light: '#A891EC',
          dark: '#A891EC',
          'text-light': '#A891EC',
          'text-dark': '#A891EC',
        },
        ghost: {
          light: '#70559B',
          dark: '#70559B',
          'text-light': '#70559B',
          'text-dark': '#70559B',
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
          dark: '#DEC16B',
          'text-light': '#DEC16B',
          'text-dark': '#DEC16B',
        },
        ice: {
          light: '#9AD6DF',
          dark: '#9AD6DF',
          'text-light': '#9AD6DF',
          'text-dark': '#9AD6DF',
        },
        poison: {
          light: '#A43E9E',
          dark: '#A43E9E',
          'text-light': '#A43E9E',
          'text-dark': '#A43E9E',
        },
        psychic: {
          light: '#FB5584',
          dark: '#FB5584',
          'text-light': '#FB5584',
          'text-dark': '#FB5584',
        },
        rock: {
          light: '#B69E31',
          dark: '#B69E31',
          'text-light': '#B69E31',
          'text-dark': '#B69E31',
        },
        steel: {
          light: '#B7B9D0',
          dark: '#B7B9D0',
          'text-light': '#B7B9D0',
          'text-dark': '#B7B9D0',
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
