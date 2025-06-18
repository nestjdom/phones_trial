import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      setError('');
      const item = localStorage.getItem(key);

      if (item !== null) {
        const parsedValue = JSON.parse(item);
        setValue(parsedValue);
      }
    } catch (err) {
      console.error(`Error loading ${key} from localStorage:`, err);
      setError(`Failed to load ${key} from localStorage`);
    }
  }, [key]);

  const setStoredValue = (newValue: T | ((prevValue: T) => T)) => {
    try {
      setError('');

      const valueToStore = newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(`Error saving ${key} to localStorage:`, err);
      setError(`Failed to save ${key} to localStorage`);
    }
  };

  return {
    value,
    setValue: setStoredValue,
    error
  };
}
