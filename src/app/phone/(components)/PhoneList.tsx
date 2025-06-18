import EmptyList from "./EmptyList";
import PhoneCard from "./PhoneCard";
import { phonesApi } from "@/data/phonesApi";

interface PhoneListProps {
  search?: string;
}

export default async function PhoneList({ search }: PhoneListProps) {
  const phones = await phonesApi.fetchAllProducts({ search, limit: 20 });

  if (phones.length === 0) return <EmptyList hasSearched={!!search} />;

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
