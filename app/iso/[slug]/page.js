import { notFound } from "next/navigation";
import { isoData } from "@/data/isoData";
import ISOPage from "@/components/ISOPage";

export function generateStaticParams() {
  return Object.keys(isoData).map((slug) => ({
    slug,
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const iso = isoData[slug];

  if (!iso) {
    return {
      title: "ISO Certification | ACE-CERT",
    };
  }

  return {
    title: `${iso.shortTitle} | ACE-CERT`,
    description: iso.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const iso = isoData[slug];

  if (!iso) {
    notFound();
  }

  return <ISOPage iso={iso} />;
}