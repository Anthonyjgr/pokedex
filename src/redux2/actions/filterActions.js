// Action creator to clear all filters
export const clearFilters = () => {
  return {
    type: "CLEAR-FILTERS", // Action type for clearing filters
  };
};

// Action creator to filter based on input and type
export const filter = (input, filterType) => {
  // Initialize `filters` in localStorage if it does not exist or if it has an invalid format
  if ((input && filterType) || (filterType === "input" && input === "")) {
    // Retrieve the existing filters from localStorage
    const storageFilters = localStorage.getItem("filters");
    const currentFilters = JSON.parse(storageFilters);

    // Update the specific filter with the new input
    const updatedFilters = { ...currentFilters, [filterType]: input };

    // Save the updated filters object back to localStorage
    localStorage.setItem("filters", JSON.stringify(updatedFilters));
  }

  // Return an action to filter with the current filters
  return {
    type: "FILTER",
    payload: "", // This returns all current filters (currently not utilizing `input`)
  };
};
