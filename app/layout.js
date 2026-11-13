import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://ace-cert.com"),
  title: {
    default: "ISO Certification, Training & Inspection Services | ACE-CERT",
    template: "%s",
  },
  description: "ISO certification, inspection, and training services from ACE-CERT. Explore management system standards and support for your organization.",
  openGraph: {
    type: "website",
    siteName: "ACE-CERT",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-smooth-scroll="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://ace-cert.com/#organization',
                  name: 'ACE-CERT',
                  url: 'https://ace-cert.com/',
                  logo: 'https://ace-cert.com/acecert-logo.png',
                  email: 'info@acecert.com',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://ace-cert.com/#website',
                  url: 'https://ace-cert.com/',
                  name: 'ACE-CERT',
                  publisher: { '@id': 'https://ace-cert.com/#organization' },
                  inLanguage: 'en',
                },
              ],
            }),
          }}
        />
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
