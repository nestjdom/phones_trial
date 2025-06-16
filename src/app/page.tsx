import PhoneList from '@/components/PhoneList';
import { phonesApi } from '@/data/phonesApi';

export default async function HomePage() {
  const phones = await phonesApi.fetchAllProducts();

  return (
    <div className="page-container">
      <div className="container py-8">
        <div className="text-center home-header">
          <h1 className="heading--h1">
            📱MOBEST
          </h1>
        </div>

        <PhoneList initialPhones={phones} />
      </div>
    </div>
  );
}
