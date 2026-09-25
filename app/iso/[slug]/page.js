import { notFound } from "next/navigation";
import { isoPages } from "@/data/isodata";
import ISOPage from "@/components/ISOPage";

export function generateStaticParams() {
  return Object.keys(isoPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const iso = isoPages[slug];

  if (!iso) {
    return {
      title: "ISO Certification | ACE-CERT",
    };
  }

  return {
    title: `${iso.name} | ACE-CERT`,
    description: iso.heroDescription,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const iso = isoPages[slug];

  if (!iso) {
    notFound();
  }

  return <ISOPage iso={iso} />;
}