export const clearFilters = () => {
  return {
    type: "CLEAR-FILTERS",
  };
};

export const filter = (input, filterType) => {
  // Inicializa `filters` en localStorage si no existe o si tiene un formato inválido

  if ((input && filterType) || (filterType === "input" && input === "")) {
    const storageFilters = localStorage.getItem("filters");
    const currentFilters = JSON.parse(storageFilters);

    // Actualiza el filtro específico con el nuevo input
    const updatedFilters = { ...currentFilters, [filterType]: input };

    // Guarda el nuevo objeto de filtros en localStorage
    localStorage.setItem("filters", JSON.stringify(updatedFilters));
  }

  return {
    type: "FILTER",
    payload: "", // Esto devuelve todos los filtros actuales
  };
};
