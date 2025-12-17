"use client";

import { useEffect, useState } from "react";

export function useSearch(delay = 500) {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue.trim() === "") {
      setResults([]);
      setLoading(false);
      return;
    }

    console.log("Search called with:", debouncedValue);
    setLoading(true);

    const timer = setTimeout(() => {
      setResults([
        `Kết quả 1 cho "${debouncedValue}"`,
        `Kết quả 2 cho "${debouncedValue}"`,
        `Kết quả 3 cho "${debouncedValue}"`,
      ]);
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [debouncedValue]);

  return {
    value,
    setValue,
    loading,
    results,
  };
}
