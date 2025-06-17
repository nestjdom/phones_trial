import PhoneCard from "./PhoneCard";
import { phonesApi } from "@/data/phonesApi";

interface PhoneListProps {
  search?: string;
}

export const texts = {
  noResults: "No se encontraron teléfonos que coincidan con tu búsqueda",
  noPhones: "No hay teléfonos disponibles",
  results: "RESULTS",
}

export default async function PhoneList({ search }: PhoneListProps) {
  const phones = await phonesApi.fetchAllProducts({ search });

  return (
    <section className='space-y-6'>
      <>
        {phones.length === 0 ? (
          <div className='empty-state'>
            <div className='empty-state__description'>
              {!!search ? texts.noResults : texts.noPhones}
            </div>
          </div>
        ) : (
          <>
            <div className='text--sm text--gray-600'>{phones.length} {texts.results}</div>

            <ul className='grid grid--cols-2 grid--sm-cols-3 grid--lg-cols-4 grid--xl-cols-5 grid-with-borders'>
              {phones.map((phone, index) => (
                <li key={phone.id + index}>
                  <PhoneCard phone={phone} />
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    </section>
  );
}
