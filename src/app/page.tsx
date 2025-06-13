import PhoneList from '@/components/PhoneList';
import { phonesApi } from '@/data/phonesApi';

export default async function HomePage() {
  const phones = await phonesApi.fetchAllProducts();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            📱MOBEST
          </h1>
        </div>

        <PhoneList initialPhones={phones} />
      </div>
    </div>
  );
}
