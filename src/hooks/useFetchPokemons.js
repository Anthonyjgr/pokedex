import { useEffect, useState } from 'react';
import { fetchPokemons } from '../services/api';

const useFetchPokemons = (page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPokemons(page);
        setData(result.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { data, loading, error };
};

export default useFetchPokemons;
