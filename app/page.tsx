import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      
      {/* JSON-LD for Local Business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amanda House Teknik",
            "image": "https://waterheatercall.com/images/hero3.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalan Gunung Sari No. 15 Sawunggaling, Wonokromo",
              "addressLocality": "Surabaya",
              "addressRegion": "Jawa Timur",
              "postalCode": "60242",
              "addressCountry": "ID"
            },
            "url": "https://waterheatercall.com",
            "telephone": "+6285190876262",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
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
              }
            ],
            "description": "Layanan service water heater profesional panggilan 24 jam untuk semua merk."
          })
        }}
      />
    </div>
  );
}
