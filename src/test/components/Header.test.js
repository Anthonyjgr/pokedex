// src/test/components/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../redux2/store.js'; // Asegúrate de que esta ruta sea correcta
import Header from '../../components/layout/Header'; // Asegúrate de que esta ruta sea correcta

describe('Header Component', () => {
  test('renders header with title', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const titleElement = screen.getByText(/Enjoy Your Journey!/i); // Asegúrate de que este texto sea el correcto
    expect(titleElement).toBeInTheDocument();
  });
});
