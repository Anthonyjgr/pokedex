export const getColorTheme = (type, isDarkMode) => {
  const colorThemes = {
    bug: {
      light: "bg-bug-light",
      dark: "bg-bug-dark",
    },
    dark: {
      light: "bg-dark-light",
      dark: "bg-dark-dark",
    },
    dragon: {
      light: "bg-dragon-light",
      dark: "bg-dragon-dark",
    },
    electric: {
      light: "bg-electric-light",
      dark: "bg-electric-dark",
    },
    fairy: {
      light: "bg-fairy-light",
      dark: "bg-fairy-dark",
    },
    fighting: {
      light: "bg-fighting-light",
      dark: "bg-fighting-dark",
    },
    fire: {
      light: "bg-fire-light",
      dark: "bg-fire-dark",
    },
    flying: {
      light: "bg-flying-light",
      dark: "bg-flying-dark",
    },
    ghost: {
      light: "bg-ghost-light",
      dark: "bg-ghost-dark",
    },
    grass: {
      light: "bg-grass-light",
      dark: "bg-grass-dark",
    },
    ground: {
      light: "bg-ground-light",
      dark: "bg-ground-dark",
    },
    ice: {
      light: "bg-ice-light",
      dark: "bg-ice-dark",
    },
    poison: {
      light: "bg-poison-light",
      dark: "bg-poison-dark",
    },
    psychic: {
      light: "bg-psychic-light",
      dark: "bg-psychic-dark",
    },
    rock: {
      light: "bg-rock-light",
      dark: "bg-rock-dark",
    },
    steel: {
      light: "bg-steel-light",
      dark: "bg-steel-dark",
    },
    water: {
      light: "bg-water-light",
      dark: "bg-water-dark",
    },
  };
  return type ? (isDarkMode ? colorThemes[type]?.dark : colorThemes[type]?.light) : 'bg-gray-200';
};
