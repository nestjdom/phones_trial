import PhoneList from "./phone/(components)/PhoneList";
import { phonesApi } from "@/data/phonesApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Store",
  description: "Phone Store"
};

type Params = Promise<{ search: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { search } = await params;

  const phones = await phonesApi.fetchAllProducts({ search: search as string });

  return (
    <div className='page-container'>
      <div className='container py-8'>
        <PhoneList initialPhones={phones} />
      </div>
    </div>
  );
}
