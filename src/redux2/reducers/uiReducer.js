import { TOGGLE_THEME } from '../types';

// Carga el estado inicial de `isDarkMode` desde `localStorage`, si existe.
const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false, // Valor predeterminado si no hay dato en `localStorage`.
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newIsDarkMode = !state.isDarkMode;

      // Aplica o quita la clase "dark" en el `document` según `newIsDarkMode`
      if (newIsDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Guarda el valor actualizado de `isDarkMode` en `localStorage`
      localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode));

      return {
        ...state,
        isDarkMode: newIsDarkMode, // Cambia el valor del estado.
      };

    default:
      return state;
  }
};

export default uiReducer;
