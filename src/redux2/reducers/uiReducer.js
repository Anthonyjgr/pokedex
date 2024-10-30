import { TOGGLE_THEME } from '../types';

const initialState = {
  isDarkMode: false, // Valor inicial para el tema claro.
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:

      const newIsDarkMode = !state.isDarkMode;
      // Aplica o quita la clase "dark" según el nuevo valor de `isDarkMode`
      if (newIsDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return {
        ...state,
        isDarkMode: !state.isDarkMode, // Cambia entre `true` y `false`.
      };
    default:
      return state;
  }
};

export default uiReducer;
