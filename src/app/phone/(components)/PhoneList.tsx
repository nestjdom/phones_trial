'use client';

import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import PhoneCard from './PhoneCard';
import { Phone } from '@/types/phone';
import { phonesApi } from '@/data/phonesApi';

interface PhoneListProps {
  initialPhones: Phone[];
}

export default function PhoneList({ initialPhones }: PhoneListProps) {
  const [phones, setPhones] = useState<Phone[]>(initialPhones);
  const [loading, setLoading] = useState(false);

  const fetchPhones = useCallback(async (search: string = '') => {
    setLoading(true);
    try {
      const searchParams = new URLSearchParams();
      if (search) {
        searchParams.append('search', search);
      }
      searchParams.append('limit', '20');
      
      const phones = await phonesApi.fetchAllProducts();
      
      setPhones(phones);
    } catch (error) {
      console.error('Error fetching phones:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    if (query) {
      fetchPhones(query);
    } else {
      setPhones(initialPhones);
    }
  }, [fetchPhones, initialPhones]);

  return (
    <div className="space-y-6">
      <SearchBar 
        onSearch={handleSearch}
        resultsCount={phones.length}
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
              {phones.length > 0 && (
                <div className="text--sm text--gray-600">
                  {phones.length} RESULTS
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