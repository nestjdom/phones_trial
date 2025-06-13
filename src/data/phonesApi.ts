import { PhoneDetail, Phone } from '@/types/phone';

const API_KEY = '87909682e6cd74208f41a6ef39fe4191';
const BASE_URL = 'http://prueba-tecnica-api-tienda-moviles.onrender.com';

class PhonesApi {
  async fetchAllProducts(): Promise<Phone[]> {
    try{
      const res = await fetch(`${BASE_URL}/products`, {
        headers: { 'x-api-key': API_KEY }
      });
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching products on server:', error);
      throw error;
    }
  }

  async fetchProductById(id: PhoneDetail['id']): Promise<PhoneDetail> {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      headers: { 'x-api-key': API_KEY }
    });
    if (!res.ok) throw new Error('Failed to fetch product with id: ' + id);
    const data = await res.json();
    return data;
  }
}

export const phonesApi = new PhonesApi(); 