import { notFound } from "next/navigation";
import { phonesApi } from "@/services/phonesApi";
import PhoneDetailClient from "./PhoneDetailClient";

interface PhoneDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhoneDetailPage({ params }: PhoneDetailPageProps) {
  const { id } = await params;
  const phone = await phonesApi.fetchProductById(id);

  if (!phone) notFound();

  return <PhoneDetailClient phone={phone} />;
}
