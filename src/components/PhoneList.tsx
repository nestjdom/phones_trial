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
        <div className="loading">
          <div className="loading__spinner"></div>
        </div>
      )}

      {!loading && (
        <>
          {phones.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__description">
                {searchQuery ? 'No se encontraron teléfonos que coincidan con tu búsqueda' : 'No hay teléfonos disponibles'}
              </div>
            </div>
          ) : (
            <>
              {searchQuery && (
                <div className="text--sm text--gray-600">
                  {totalResults} RESULTS
                </div>
              )}

              <div className="grid grid--cols-2 grid--sm-cols-3 grid--lg-cols-4 grid--xl-cols-5 grid--gap-4">
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