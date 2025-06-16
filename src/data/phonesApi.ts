import { PhoneDetail, Phone } from '@/types/phone';

const API_KEY = '87909682e6cd74208f41a6ef39fe4191';
const BASE_URL = 'http://prueba-tecnica-api-tienda-moviles.onrender.com';

class PhonesApi {
  async fetchAllProducts(): Promise<Phone[]> {
    return this.tryFetch(`${BASE_URL}/products`);
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