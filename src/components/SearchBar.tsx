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
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {typeof resultsCount === 'number' && (
        <div className="mt-2 text-sm text-gray-600">
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