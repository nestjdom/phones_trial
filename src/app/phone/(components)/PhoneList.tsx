import PhoneCard from "./PhoneCard";
import { phonesApi } from "@/data/phonesApi";

interface PhoneListProps {
  search?: string;
}

export default async function PhoneList({ search }: PhoneListProps) {
  const phones = await phonesApi.fetchAllProducts({ search });

  return (
    <div className='space-y-6'>
      <>
        {phones.length === 0 ? (
          <div className='empty-state'>
            <div className='empty-state__description'>
              {phones.length === 0
                ? "No se encontraron teléfonos que coincidan con tu búsqueda"
                : "No hay teléfonos disponibles"}
            </div>
          </div>
        ) : (
          <>
            {phones.length > 0 && <div className='text--sm text--gray-600'>{phones.length} RESULTS</div>}

            <div className='grid grid--cols-2 grid--sm-cols-3 grid--lg-cols-4 grid--xl-cols-5 grid--gap-4'>
              {phones.map((phone, index) => (
                <PhoneCard key={phone.id + index} phone={phone} priority={index < 10} />
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
}
