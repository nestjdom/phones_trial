import PhoneList from "./phone/(components)/PhoneList";
import { Metadata } from "next";
import SearchBar from "./phone/(components)/SearchBar";

export const metadata: Metadata = {
  title: "Phone Store",
  description: "Phone Store"
};

export default async function HomePage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search } = await searchParams;

  return (
    <div className='page-container'>
      <div className='container py-8'>
        <SearchBar />
        <PhoneList search={search} />
      </div>
    </div>
  );
}
