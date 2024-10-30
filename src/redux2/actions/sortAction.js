export const SortPokemons = (order) => {
  localStorage.setItem("sort", order)
  return {
    type: "SORT",
    payload: order ,
  };
};
