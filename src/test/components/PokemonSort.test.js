// PokemonSort.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import PokemonSort from "../../components/pokemon/PokemonSort";
import { filter } from "../../redux2/actions/filterActions";

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the filter action
jest.mock("../../redux2/actions/filterActions");

describe("PokemonSort Component", () => {
  let store;
  const resetFiltersMock = jest.fn();

  beforeEach(() => {
    // Set up the mock store with initial state
    store = mockStore({
      pokemon: {
        filterSort: "lower", // Initial value for filterSort
      },
    });

    // Reset the mock implementation for filter action
    filter.mockImplementation(() => ({ type: "FILTER" }));
  });

  it("renders with initial sort value from Redux store", () => {
    render(
      <Provider store={store}>
        <PokemonSort resetFilters={resetFiltersMock} />
      </Provider>
    );

    // Assert that the select dropdown has the initial value
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("lower");
  });

  it("dispatches filter action on select change", () => {
    render(
      <Provider store={store}>
        <PokemonSort resetFilters={resetFiltersMock} />
      </Provider>
    );

    const select = screen.getByRole("combobox");

    // Simulate a change in the select dropdown
    fireEvent.change(select, { target: { value: "highest" } });

    // Assert that the local state and the dispatch action are correct
    expect(select).toHaveValue("highest");
    expect(filter).toHaveBeenCalledWith("highest", "sort"); // Check if filter action is dispatched correctly
  });

  it("resets sort value when resetFilters changes", () => {
    const { rerender } = render(
      <Provider store={store}>
        <PokemonSort resetFilters={resetFiltersMock} />
      </Provider>
    );

    const select = screen.getByRole("combobox");

    // Change the select value
    fireEvent.change(select, { target: { value: "a-z" } });
    expect(select).toHaveValue("a-z"); // Confirm the value changed

    // Rerender the component with a new resetFilters value
    rerender(
      <Provider store={store}>
        <PokemonSort resetFilters={true} /> // Simulate reset
      </Provider>
    );

    // Assert that the sort value is reset to the initial value from the Redux store
    expect(select).toHaveValue("lower");
  });
});
