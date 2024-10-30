// Import necessary libraries and components for testing
import React from 'react';
import { render, screen } from '@testing-library/react'; // Importing React Testing Library functions for rendering and querying components
import { Provider } from 'react-redux'; // To provide the Redux store to the component
import { MemoryRouter } from 'react-router-dom'; // To simulate routing for components that depend on React Router
import store from '../../redux2/store.js'; // Ensure the path to the Redux store is correct
import Header from '../../components/layout/Header'; // Ensure the path to the Header component is correct

// Group tests related to the Header component
describe('Header Component', () => {
  // Define a test case to check if the header renders with the expected title
  test('renders header with title', () => {
    // Render the Header component wrapped in the Redux Provider and MemoryRouter
    render(
      <Provider store={store}> // Provide the Redux store to the Header component
        <MemoryRouter> // Wrap in MemoryRouter to simulate routing
          <Header /> // Render the Header component
        </MemoryRouter>
      </Provider>
    );

    // Query for the title element within the rendered Header component
    const titleElement = screen.getByText(/Enjoy Your Journey!/i); // Regex to match the title text case-insensitively
    expect(titleElement).toBeInTheDocument(); // Assert that the title is present in the document
  });
});
