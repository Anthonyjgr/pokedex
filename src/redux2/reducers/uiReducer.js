// Import the action type for toggling the theme
import { TOGGLE_THEME } from '../types';

// Initialize the state for UI settings
// Load the initial state of `isDarkMode` from localStorage, defaulting to false if it doesn't exist
const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false, // Default value if no data in localStorage
};

// Define the UI reducer to handle theme-related actions
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle the action to toggle the theme
    case TOGGLE_THEME:
      // Toggle the value of isDarkMode between true and false
      const newIsDarkMode = !state.isDarkMode;

      // Update the document's class to reflect the new theme
      // If dark mode is activated, add the 'dark' class to the document element
      if (newIsDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        // If dark mode is deactivated, remove the 'dark' class from the document element
        document.documentElement.classList.remove('dark');
      }

      // Save the updated value of isDarkMode to localStorage
      localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode));

      // Return the new state with the updated isDarkMode value
      return {
        ...state,
        isDarkMode: newIsDarkMode, // Update the state with the new theme value
      };

    // Return the current state if the action type doesn't match any case
    default:
      return state;
  }
};

// Export the uiReducer as the default export of this module
export default uiReducer;
