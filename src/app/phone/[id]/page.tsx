import { notFound } from "next/navigation";
import { phonesApi } from "@/data/phonesApi";
import PhoneDetailClient from "./PhoneDetailClient";

interface PhoneDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PhoneDetailPage({ params }: PhoneDetailPageProps) {
  const { id } = await params;
  const phone = await phonesApi.fetchProductById(id);

  if (!phone) notFound();

  return <PhoneDetailClient phone={phone} />;
}
