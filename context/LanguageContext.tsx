"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ID" | "EN";

type Dictionary = {
  [key: string]: {
    [key: string]: any;
  };
};

const dictionary: Dictionary = {
  ID: {
    nav: {
      services: "Layanan",
      whyUs: "Keunggulan",
      pricing: "Harga",
      projects: "Proyek",
      contact: "Hubungi Kami",
    },
    hero: {
      badge: "Spesialis Water Heater",
      title_1: "Amanda ",
      title_italic: "House ",
      title_2: "Teknik",
      sub: "Perbaikan & perawatan water heater cepat, aman, dan bergaransi oleh teknisi berpengalaman.",
      cta_quote: "Konsultasi Gratis",
      cta_wa: "WhatsApp",
    },
    services: {
      tag: "Layanan Kami",
      title: "Solusi lengkap dan terpercaya untuk segala kebutuhan water heater Anda.",
      list: [
        { title: "Solusi Perbaikan Cepat", desc: "Air tidak panas atau mesin mati? Kami perbaiki segera agar aktivitas mandi Anda tidak terganggu." },
        { title: "Pasang Unit Baru", desc: "Serahkan pemasangan water heater baru Anda pada ahlinya untuk jaminan keamanan dan kerapian instalasi." },
        { title: "Perawatan Rutin", desc: "Cegah kerusakan dini dengan pembersihan kerak dan pengecekan elemen secara berkala agar unit lebih awet." },
        { title: "Cek & Konsultasi", desc: "Bingung pilih unit atau sistem pipa? Konsultasikan kebutuhan air panas rumah Anda secara gratis." },
        { title: "Ganti Spare Part", desc: "Kami hanya menggunakan suku cadang original untuk memastikan water heater Anda kembali bekerja seperti baru." },
        { title: "Spesialis Water Heater Gas", desc: "Layanan khusus untuk sistem gas dengan standar keamanan tinggi demi ketenangan keluarga Anda." },
        { title: "Jasa Bongkar Pasang", desc: "Pindahan rumah? Tim kami siap memindahkan unit Anda dengan hati-hati dan memasangnya kembali dengan sempurna." },
        { title: "Siaga 24 Jam", desc: "Kendala mendesak di malam hari atau hari libur? Teknisi kami siap membantu kapan pun Anda butuhkan." },
      ]
    },
    pricing: {
      tag: "Harga",
      title: "Harga jujur dan sederhana.",
      sub: "Kami memberikan estimasi jelas sebelum pekerjaan dimulai.",
      select: "Pilih Paket",
      popular: "Populer",
      plans: [
        { name: "Perawatan", price: "200rb", features: ["Pembersihan Kerak", "Cek Elemen Pemanas", "Tes Kelistrikan", "Inspeksi Penuh"] },
        { name: "Layanan Perbaikan", price: "300rb", features: ["Biaya Diagnosa", "Cek Suku Cadang", "Selesai Hari Ini", "Garansi Layanan"] },
        { name: "Pemasangan Baru", price: "450rb", features: ["Pemasangan Ahli", "Koneksi Pipa & Kabel", "Tes Keamanan", "Panduan Penggunaan"] },
      ]
    },
    contact: {
      tag: "Hubungi Kami",
      title: "Butuh bantuan dengan water heater Anda?",
      sub: "Jangan biarkan aktivitas mandi dan cuci terganggu karena water heater rusak. Teknisi kami siap datang ke rumah Anda hari ini juga.",
      form: {
        name: "Nama Anda",
        phone: "Nomor WhatsApp",
        message: "Jelaskan Kendala Water Heater Anda",
        submit: "Kirim Pesan",
      }
    },
    whyUs: {
      tag: "Mengapa Memilih Kami",
      title: "Kenyamanan air panas di rumah Anda adalah prioritas kami.",
      sub: "Lebih dari sekadar servis, kami memberikan ketenangan pikiran. Dengan teknisi berpengalaman dan pelayanan jujur, kami memastikan setiap pekerjaan selesai dengan sempurna.",
      list: [
        { title: "Berpengalaman", desc: "Ditangani langsung oleh teknisi spesialis yang telah bertahun-tahun menangani berbagai merk water heater." },
        { title: "Respons Cepat", desc: "Layanan panggil ke rumah di hari yang sama untuk memastikan air panas Anda segera kembali normal." },
        { title: "Transparan", desc: "Penjelasan masalah yang jujur dan estimasi biaya yang jelas sebelum pengerjaan dimulai." },
        { title: "Bergaransi", desc: "Kami memberikan jaminan kepuasan dengan garansi perbaikan dan pemasangan untuk setiap unit." },
      ],
      years: "Tahun Pengalaman",
      trusted: "Bantu tetap nyaman dipakai"
    },
    gallery: {
      tag: "Portofolio Kami",
      title: "Dokumentasi hasil kerja keras tim kami di lapangan.",
      viewAll: "Lihat Semua Galeri"
    },
    footer: {
      tagline: "Spesialis water heater andalan Anda. Kami berkomitmen memberikan layanan yang cepat, aman, dan berkualitas tinggi untuk setiap rumah tangga.",
      links_title: "Akses Cepat",
      services_title: "Layanan Unggulan",
      contact_title: "Hubungi Kami",
      rights: "© 2026 Amanda House Teknik. Hak cipta dilindungi undang-undang.",
    },
    testimonials: {
      tag: "Kata Mereka",
      title: "Kepuasan pelanggan adalah kebanggaan kami.",
      list: [
        { name: "Andi Saputra", role: "Pemilik Rumah", text: "Pelayanannya mantap! Teknisi datang tepat waktu, kerjanya rapi, dan water heater saya langsung bisa dipakai lagi. Sangat direkomendasikan." },
        { name: "Siska Wijaya", role: "Pemilik Kos", text: "Sudah langganan pakai jasa Amanda House Teknik untuk water heater di kos saya. Servis berkalanya bikin unit awet dan tidak cepat rusak. Terima kasih!" },
        { name: "Budi Santoso", role: "Klien Perumahan", text: "Pelayanannya sangat jujur dan transparan dari awal. Teknisi juga ramah dan menjelaskan cara perawatan water heater dengan sabar. Puas banget!" },
        { name: "Rina Amelia", role: "Ibu Rumah Tangga", text: "Pelayanan sangat memuaskan. Teknisi menjelaskan detail kerusakannya dan cara perawatannya. Sekarang mandi air panas jadi tenang lagi." },
        { name: "Hendra Pratama", role: "Pengusaha", text: "Cepat tanggap! Begitu dihubungi lewat WhatsApp, teknisi langsung dijadwalkan datang hari itu juga. Hasil kerjanya sangat profesional." },
        { name: "Dewi Lestari", role: "Pemilik Apartemen", text: "Harga yang diberikan sangat transparan. Tidak ada biaya tersembunyi. Amanda House Teknik benar-benar jasa servis water heater terbaik." },
      ]
    }
  },
  EN: {
    nav: {
      services: "Services",
      whyUs: "Why Us",
      pricing: "Pricing",
      projects: "Projects",
      contact: "Contact Us",
    },
    hero: {
      badge: "Professional Water Heater Specialists",
      title_1: "Amanda ",
      title_italic: "House ",
      title_2: "Teknik",
      sub: "Restore your hot water comfort without interruption. Backed by experienced technicians, we provide fast, safe, and guaranteed water heater repair and maintenance services.",
      cta_quote: "Free Consultation Now",
      cta_wa: "Chat via WhatsApp",
    },
    services: {
      tag: "Our Services",
      title: "Comprehensive and reliable solutions for all your water heater needs.",
      list: [
        { title: "Instant Repair Solutions", desc: "No hot water or unit won't start? We fix it fast so your routine stays on track." },
        { title: "Professional Installation", desc: "Leave your new installation to the experts for a safe, clean, and reliable setup." },
        { title: "Routine Maintenance", desc: "Prevent breakdowns with deep scale cleaning and element checks to extend your unit's lifespan." },
        { title: "Expert Consultation", desc: "Unsure about units or piping? Get a free professional assessment for your home's hot water needs." },
        { title: "Quality Parts Replacement", desc: "We use only genuine spare parts to ensure your water heater performs like the day you bought it." },
        { title: "Gas System Specialists", desc: "Dedicated service for gas systems with high safety standards for your family's peace of mind." },
        { title: "Safe Unit Relocation", desc: "Moving house? Our team will carefully uninstall and reinstall your unit perfectly in your new home." },
        { title: "24/7 Emergency Support", desc: "Urgent issues at night or on holidays? Our technicians are on call whenever you need us." },
      ]
    },
    pricing: {
      tag: "Pricing",
      title: "Simple, honest pricing.",
      sub: "We provide clear estimates before any work begins.",
      select: "Select Plan",
      popular: "Popular",
      plans: [
        { name: "Maintenance", price: "200k", features: ["Scale Cleaning", "Element Check", "Wiring Test", "Full Inspection"] },
        { name: "Repair Service", price: "300k", features: ["Diagnostic Fee", "Parts Check", "Same-Day Fix", "Service Warranty"] },
        { name: "New Installation", price: "450k", features: ["Expert Mounting", "Pipe & Cable Connection", "Safety Testing", "Usage Guidance"] },
      ]
    },
    contact: {
      tag: "Contact Us",
      title: "Need help with your water heater?",
      sub: "Don't let a broken water heater disrupt your daily routine. Our technicians are ready to come to your home today.",
      form: {
        name: "Your Name",
        phone: "WhatsApp Number",
        message: "Describe your water heater issue",
        submit: "Send Message",
      }
    },
    whyUs: {
      tag: "Why Choose Us",
      title: "Your home's hot water comfort is our top priority.",
      sub: "More than just a service, we deliver peace of mind. With experienced technicians and honest service, we ensure every job is done perfectly.",
      list: [
        { title: "Experienced", desc: "Handled directly by specialized technicians with years of experience across all water heater brands." },
        { title: "Fast Response", desc: "Same-day home service to ensure your hot water is restored as soon as possible." },
        { title: "Transparent", desc: "Honest explanation of issues and clear cost estimates before any work begins." },
        { title: "Guaranteed", desc: "We ensure your satisfaction with formal warranties for every repair and installation service." },
      ],
      years: "Years of Experience",
      trusted: "Happy Clients"
    },
    gallery: {
      tag: "Our Portfolio",
      title: "Documentation of our team's professional water heater service in the field.",
      viewAll: "View All Gallery"
    },
    footer: {
      tagline: "Your reliable water heater specialist. We are committed to providing fast, safe, and high-quality services for every household.",
      links_title: "Quick Links",
      services_title: "Key Services",
      contact_title: "Contact Us",
      rights: "© 2026 Amanda House Teknik. All rights reserved.",
    },
    testimonials: {
      tag: "What They Say",
      title: "Customer satisfaction is our ultimate pride.",
      list: [
        { name: "Andi Saputra", role: "Homeowner", text: "Excellent service! The technician arrived on time, worked neatly, and my water heater was back to normal in no time. Highly recommended." },
        { name: "Siska Wijaya", role: "Property Owner", text: "I've been using Amanda House Teknik's services for the water heaters in my boarding house. Their regular maintenance keeps the units running perfectly. Thank you!" },
        { name: "Budi Santoso", role: "Client", text: "The service was very honest and transparent from the start. The technician was friendly and patiently explained proper maintenance tips. Very satisfied!" },
        { name: "Rina Amelia", role: "Housewife", text: "Very satisfying service. The technician explained the damage details and maintenance tips. Now I can enjoy my hot showers with peace of mind." },
        { name: "Hendra Pratama", role: "Entrepreneur", text: "Very responsive! As soon as I contacted them via WhatsApp, they scheduled a technician for the same day. Very professional work." },
        { name: "Dewi Lestari", role: "Apartment Owner", text: "The pricing is very transparent with no hidden costs. Amanda House Teknik is truly the best water heater service in the city." },
      ]
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");

  // Load preferred language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let result = dictionary[lang];
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
