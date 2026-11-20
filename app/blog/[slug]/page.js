import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityClient, sanityConfigured, urlFor } from '../../../lib/sanity/client';
import { postQuery, postSlugsQuery } from '../../../lib/sanity/queries';

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1200).url();
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="h-auto w-full rounded-2xl"
          />
        </figure>
      );
    },
  },
};

export async function generateStaticParams() {
  if (!sanityConfigured) return [];
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!sanityConfigured) return {};

  const post = await sanityClient.fetch(postQuery, { slug });
  if (!post) return {};

  const title = `${post.metaTitle || post.title} | ACE-CERT`;
  const description =
    post.metaDescription || post.excerpt || 'Read this article from ACE-CERT.';
  const imageBuilder = urlFor(post.mainImage);
  const image = imageBuilder
    ? imageBuilder.width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  if (!sanityConfigured) notFound();

  const post = await sanityClient.fetch(postQuery, { slug });
  if (!post) notFound();

  const imageBuilder = urlFor(post.mainImage);
  const image = imageBuilder
    ? imageBuilder.width(1600).height(800).url()
    : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': 'https://ace-cert.com/#organization' },
    mainEntityOfPage: `https://ace-cert.com/blog/${slug}`,
    ...(image ? { image } : {}),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
          {post.category || 'Certification'}
        </p>
        <h1 className="text-balance text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
          <span>{post.author}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(new Date(post.publishedAt))}
          </time>
        </div>
        {image && (
          <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={post.mainImage?.alt || post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}
        <div className="mt-10 text-lg leading-8 text-slate-700 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_p]:mb-5 [&_a]:text-red-700 [&_a]:underline">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </article>
    </main>
  );
}

