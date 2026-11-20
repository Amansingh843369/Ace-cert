import BlogSection from '../../components/BlogSection';

export const metadata = {
  title: 'ISO Certification Guides & Compliance Blog | ACE-CERT',
  description:
    'Read practical guides about ISO certification, compliance, quality management, cybersecurity, training, and business improvement.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BlogSection />
    </main>
  );
}

