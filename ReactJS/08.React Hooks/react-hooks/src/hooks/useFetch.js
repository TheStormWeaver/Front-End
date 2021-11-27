import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setState(res.results);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return {
    state,
    isLoading,
    error,
  };
}
