import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Amanda House Teknik | Service Water Heater Panggilan 24 Jam",
  description: "Jasa service water heater profesional & bergaransi. Melayani perbaikan, pemasangan, dan perawatan semua merk water heater. Teknisi ahli siap datang ke lokasi Anda.",
  keywords: ["service water heater", "perbaikan water heater", "pasang water heater", "water heater call", "amanda house teknik", "tukang water heater terdekat"],
  authors: [{ name: "Amanda House Teknik" }],
  metadataBase: new URL("https://waterheatercall.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amanda House Teknik | Spesialis Service Water Heater",
    description: "Solusi cepat dan tepat untuk kendala water heater Anda. Hubungi kami untuk layanan profesional 24 jam.",
    url: "https://waterheatercall.com",
    siteName: "Amanda House Teknik",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amanda House Teknik Service Water Heater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda House Teknik | Service Water Heater",
    description: "Jasa service water heater profesional & bergaransi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
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
