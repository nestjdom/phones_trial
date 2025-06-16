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
        <h1>Home Page</h1>
        <SearchBar />
        {/* <div className='search-bar__info'>
          {search.length === 0 ? "No results found" : `${search.length} ${search.length === 1 ? "RESULT" : "RESULTS"}`}
        </div> */}
        <PhoneList search={search} />
      </div>
    </div>
  );
}
