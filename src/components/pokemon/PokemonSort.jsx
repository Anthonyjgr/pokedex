import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux2/actions/filterActions";

const PokemonSort = ({resetFilters}) => {
  const iniTialValue = useSelector((state)=> state.pokemon.filterSort)
  const dispatch = useDispatch();
  const [sort, setSort] = useState(iniTialValue); // Initialize sort state with global filter value

  // Handle the selection change in the sort dropdown
  const handleSelect = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  // Watch for changes in resetFilters to reset the sort order when filters are cleared
  useEffect(() => {
    setSort(iniTialValue);
    // setResetTypes(false);  // Reset the external reset state after updating local state
  }, [resetFilters]); // Ahora escucha cambios de resetTypes y llama a setResetTypes
  
  // Dispatch the filter action to update Redux store whenever the sort value changes
  useEffect(() => {
    if (sort) {  // Ensure sort has a valid value before dispatching
      dispatch(filter(sort, "sort"));
    }
  }, [dispatch, sort]);

  return (
    <section className="mt-6 w-full text-gray-500 dark:text-white">
      <select onChange={handleSelect} value={sort} className="w-full rounded-lg p-2 text-sm bg-gray-50 border dark:border-transparent dark:bg-gray-600">
        <option value="lower">Lower ID First</option>
        <option value="highest">Highest ID First</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </section>
  );
};

export default PokemonSort

