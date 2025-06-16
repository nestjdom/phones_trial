'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultsCount?: number;
  placeholder?: string;
}

export default function SearchBar({ onSearch, resultsCount, placeholder = "Buscar teléfonos por nombre o marca..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [query, onSearch]);

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <div className="search-bar__icon">
          🔍
        </div>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {typeof resultsCount === 'number' && (
        <div className="search-bar__info">
          {resultsCount === 0 ? (
            'No se encontraron resultados'
          ) : (
            `${resultsCount} ${resultsCount === 1 ? 'resultado encontrado' : 'resultados encontrados'}`
          )}
        </div>
      )}
    </div>
  );
} 