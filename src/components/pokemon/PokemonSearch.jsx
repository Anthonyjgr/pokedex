import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux2/actions/filterActions";

const SearchBar = () => {
  const [inputData, setInputData] = useState(""); // State to store the search input value
  const dispatch = useDispatch();

  // Function to handle changes in the search input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value); // Update input data state with new value

    // If the input is cleared, dispatch a filter action with an empty value
    if (value === "") {
      dispatch(filter("", "input"));
    }
  };

  // Function to handle form submission and execute the search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    dispatch(filter(inputData, "input")); // Dispatch filter action with the current input data
  };

  // Function to clear the search input and reset filter
  const handleCleanInput = () => {
    dispatch(filter("", "input")); // Clear the filter
    setInputData(""); // Reset input data state to an empty string
  };
  
  return (
    <section className="w-full flex items-center justify-center h-[40px]">
      <form
        role="search" // Semantically indicates this form is for search purposes
        onSubmit={handleSearch} // Triggers search when the form is submitted
        className="w-full max-w-[420px] flex items-center"
      >
        {/* Accessibility label for screen readers */}
        <label htmlFor="search-input" className="sr-only text-[10px] md:text-md">
          Search Pokémon by name or ID
        </label>

        {/* Input container for search bar */}
        <div className="w-full md:w-[400px] relative">
          <input
            id="search-input"
            type="search" // Input type set as 'search' for improved semantics
            onChange={handleInputChange} // Triggered when user types in the input
            value={inputData} // Binds input to component state
            placeholder="Search by Name or ID" // Placeholder text to guide users
            className="rounded-lg text-md p-2 w-full shadow-md h-[40px] md:h-[50px] dark:bg-gray-700 dark:text-gray-200" // Styling for input
          />

          {/* Button to clear the search input */}
          <button
            className="absolute flex items-center justify-center right-1 top-1/2 transform -translate-y-1/2 cursor-pointer w-[40px] h-[40px]"
          >
            <img
              src="/close.svg"
              alt="close icon" // Alt text for close icon
              className="h-[15px] hover:scale-125 transition-all duration-300 ease-in-out" // Styles for hover effects
              onClick={handleCleanInput} // Clears the input when clicked
            />
          </button>
        </div>

        {/* Button to submit search request */}
        <button
          type="submit"
          className="rounded-lg ml-2 bg-white dark:bg-gray-700 p-2 h-[40px] md:h-[50px] shadow-md flex items-center justify-center"
          aria-label="Search" // Accessibility label for the search button
        >
          <img
            src="/search.svg"
            alt="search icon" // Alt text for search icon
            className="w-[30px] h-[30px] dark:bg-gray-700" // Styling for the icon
          />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
