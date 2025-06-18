import EmptyList from "./EmptyList";
import PhoneCard from "./PhoneCard";
import { phonesApi } from "@/services/phonesApi";

interface PhoneListProps {
  search?: string;
}

export default async function PhoneList({ search }: PhoneListProps) {
  const sanitizedSearch = search?.trim();
  const isValidSearch = sanitizedSearch && sanitizedSearch.length >= 2 && sanitizedSearch.length <= 100;

  const phones = await phonesApi.fetchAllProducts({
    search: isValidSearch ? sanitizedSearch : undefined,
    limit: 20
  });

  if (phones.length === 0) return <EmptyList hasSearched={!!isValidSearch} />;

  return (
    <section className='space-y-12'>
      <div className='text--sm text--gray-600'>{phones.length} RESULTS</div>

      <ul className='grid grid--cols-1 grid--sm-cols-2 grid--lg-cols-4 grid--xl-cols-5 grid-with-borders'>
        {phones.map((phone, index) => (
          <li key={phone.id + index}>
            <PhoneCard phone={phone} />
          </li>
        ))}
      </ul>
    </section>
  );
}
