import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amanda House Teknik | Service Water Heater Jawa Timur",
  description: "Jasa Service Water Heater, Perbaikan, Pemasangan Unit Baru, dan Descaling Perawatan Profesional di Jawa Timur. Teknisi berpengalaman, panggil 24 jam, dan bergaransi.",
  keywords: ["service water heater jawa timur", "service water heater surabaya", "service water heater panggilan", "amanda house teknik"],
  authors: [{ name: "Amanda House Teknik" }],
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  verification: {
    google: "u3W1lzF4pSyzPwSV5qgtFZFpvO-7Ww55PZDPe4nUu9I",
  },
  openGraph: {
    title: "Amanda House Teknik | Service Water Heater Surabaya & Jawa Timur",
    description: "Layanan jasa servis water heater panggilan 24 jam di Surabaya, Sidoarjo, Gresik, Malang, dan seluruh Jawa Timur.",
    url: "https://waterheatercall.com/",
    siteName: "Amanda House Teknik",
    images: [
      {
        url: "/images/hero3.webp",
        width: 1200,
        height: 630,
        alt: "Service Water Heater Amanda House Teknik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amanda House Teknik",
  "image": "https://waterheatercall.com/images/hero3.webp",
  "@id": "https://waterheatercall.com",
  "url": "https://waterheatercall.com",
  "telephone": "+6285337093748",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Gunungsari No.15, Sawunggaling",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60242",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.3036,
    "longitude": 112.7236
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://wa.me/6285337093748"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18137641771"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18137641771');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <div className="overflow-x-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
