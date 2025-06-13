'use client';

import { useState, useCallback } from 'react';
import SearchBar from '@/components/SearchBar';
import PhoneCard from '@/components/PhoneCard';
import { Phone } from '@/types/phone';

interface PhoneListProps {
  initialPhones: Phone[];
}

interface PhonesResponse {
  phones: Phone[];
  total: number;
  hasMore: boolean;
}

export default function PhoneList({ initialPhones }: PhoneListProps) {
  const [phones, setPhones] = useState<Phone[]>(initialPhones);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalResults, setTotalResults] = useState(initialPhones.length);

  const fetchPhones = useCallback(async (search: string = '') => {
    setLoading(true);
    try {
      const searchParams = new URLSearchParams();
      if (search) {
        searchParams.append('search', search);
      }
      searchParams.append('limit', '20');
      
      const response = await fetch(`/api/phones?${searchParams.toString()}`);
      const data: PhonesResponse = await response.json();
      
      setPhones(data.phones);
      setTotalResults(data.total);
    } catch (error) {
      console.error('Error fetching phones:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query) {
      fetchPhones(query);
    } else {
      setPhones(initialPhones);
      setTotalResults(initialPhones.length);
    }
  }, [fetchPhones, initialPhones]);

  return (
    <div className="space-y-6">
      <SearchBar 
        onSearch={handleSearch}
        resultsCount={searchQuery ? totalResults : undefined}
      />

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}

      {!loading && (
        <>
          {phones.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500">
                {searchQuery ? 'No se encontraron teléfonos que coincidan con tu búsqueda' : 'No hay teléfonos disponibles'}
              </div>
            </div>
          ) : (
            <>
              {searchQuery && (
                <div className="text-sm text-gray-600">
                  {totalResults} RESULTS
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {phones.map((phone, index) => (
                  <PhoneCard 
                    key={phone.id + index} 
                    phone={phone} 
                    priority={index < 10}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
} 