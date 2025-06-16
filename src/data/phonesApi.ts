import { PhoneDetail, Phone } from '@/types/phone';

const API_KEY = '87909682e6cd74208f41a6ef39fe4191';
const BASE_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com';

interface FetchAllProductsParams {
  limit?: number;
  offset?: number;
  search?: string;
}

class PhonesApi {
  async fetchAllProducts(params?: FetchAllProductsParams): Promise<Phone[]> {
    const hasParams = params && Object.values(params).some(value => value !== undefined);
    const url = `${BASE_URL}/products${hasParams ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''}`;
    return this.tryFetch(url);
  }

  async fetchProductById(id: PhoneDetail['id']): Promise<PhoneDetail> {
    return this.tryFetch(`${BASE_URL}/products/${id}`);
  }

  async tryFetch(url: string, options: RequestInit = {}) {
    try {
      const res = await fetch(url, { ...options, headers: { 'x-api-key': API_KEY } });
      if (!res.ok) throw new Error('Failed to fetch');
      return await res.json();
    } catch (error) {
      console.error('Error fetching PhonesApi:', error);
      throw error;
    }
  }
}

export const phonesApi = new PhonesApi(); 