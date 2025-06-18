import { PhoneDetail, Phone } from "@/types/phone";

const API_KEY = "87909682e6cd74208f41a6ef39fe4191";
const BASE_URL = "https://prueba-tecnica-api-tienda-moviles.onrender.com";

interface FetchAllProductsParams {
  limit?: number;
  offset?: number;
  search?: string;
}

class PhonesApi {
  async fetchAllProducts(params?: FetchAllProductsParams): Promise<Phone[]> {
    const filteredParams = Object.fromEntries(Object.entries(params || {}).filter(([, value]) => value !== undefined));
    const hasParams = Object.keys(filteredParams).length > 0;
    const url = `${BASE_URL}/products${
      hasParams ? `?${new URLSearchParams(filteredParams as Record<string, string>).toString()}` : ""
    }`;
    return this.tryFetch(url);
  }

  async fetchProductById(id: PhoneDetail["id"]): Promise<PhoneDetail> {
    return this.tryFetch(`${BASE_URL}/products/${id}`);
  }

  async tryFetch(url: string, options: RequestInit = {}) {
    try {
      const res = await fetch(url, { ...options, headers: { "x-api-key": API_KEY } });
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    } catch (error) {
      console.error("Error fetching PhonesApi:", error);
      return undefined;
    }
  }
}

export const phonesApi = new PhonesApi();
