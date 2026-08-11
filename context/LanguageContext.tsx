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
      badge: "SPESIALIS SERVICE WATER HEATER PANGGILAN",
      title_main_1: "Jasa Service",
      title_main_2: "Water Heater Bergaransi",
      subtitle_highlight: "Teknisi Panggilan Datang Hari Ini!",
      location: "Melayani Seluruh Area Jawa Timur",
      cta_wa: "CHAT WHATSAPP",
      cta_wa_sub: "Respon Cepat via WhatsApp 24 Jam",
      feature_1: "Teknisi Berpengalaman 10+ Thn",
      feature_2: "Garansi Sparepart 12 Bulan",
      feature_3: "Seluruh Area Jawa Timur",
    },
    services: {
      title: "MENGAPA MEMILIH AMANDA HOUSE TEKNIK?",
      items: [
        {
          title: "Teknisi Berpengalaman",
          desc: "Teknisi khusus Amanda House Teknik dengan pengalaman 10+ tahun menangani berbagai merk water heater.",
        },
        {
          title: "Diagnosa Sebelum Perbaikan",
          desc: "Pengecekan menyeluruh terhadap kelistrikan, elemen, dan pipa sebelum rekomendasi perbaikan diberikan.",
        },
        {
          title: "Estimasi Biaya Transparan",
          desc: "Estimasi biaya disampaikan secara jujur dan jelas di awal sebelum pengerjaan dimulai.",
        },
        {
          title: "Sparepart Sesuai Spesifikasi",
          desc: "Penggantian suku cadang berkualitas dan sesuai spesifikasi resmi pabrikan unit Anda.",
        },
        {
          title: "Garansi Tertulis",
          desc: "Garansi tertulis hingga 12 bulan untuk perbaikan dan komponen suku cadang yang diganti.",
        },
        {
          title: "Home Service Jawa Timur",
          desc: "Melayani rumah tangga, apartemen, hotel, villa, kos, dan industri di seluruh wilayah Jawa Timur.",
        },
      ],
      list: [
        { title: "Teknisi Berpengalaman" },
        { title: "Diagnosa Sebelum Perbaikan" },
        { title: "Estimasi Biaya Transparan" },
        { title: "Sparepart Sesuai Spesifikasi" },
        { title: "Garansi Tertulis" },
        { title: "Home Service Jawa Timur" },
      ],
    },
    ourServices: {
      title: "LAYANAN SERVICE WATER HEATER KAMI",
      items: [
        {
          title: "Perbaikan Water Heater",
          sub: "Mati Total & Air Tidak Panas",
          desc: "Perbaikan masalah ELCB, thermostat, elemen pemanas, kebocoran tangki, hingga unit mati total.",
          image: "/images/ars1.webp",
        },
        {
          title: "Pemasangan Unit Baru",
          sub: "Instalasi & Bongkar Pasang",
          desc: "Jasa pemasangan unit baru, pemindahan lokasi water heater, dan penataan saluran pipa & kelistrikan.",
          image: "/images/ars2.webp",
        },
        {
          title: "Perawatan & Descaling",
          sub: "Pembersihan Kerak & Kuras Tangki",
          desc: "Pembersihan endapan kerak kapur, kuras tangki, dan penggantian anoda magnesium agar unit lebih awet.",
          image: "/images/ars3.webp",
        },
        {
          title: "Penggantian Sparepart",
          sub: "Komponen Original & Bergaransi",
          desc: "Penggantian suku cadang berkualitas dan sesuai spesifikasi resmi unit water heater Anda.",
          image: "/images/ars4.webp",
        },
      ],
    },
    commonIssues: {
      title: "MASALAH WATER HEATER YANG SERING KAMI TANGANI",
      categories: [
        {
          type: "repair",
          title: "Kerusakan Sistem & Pembuatan Air Panas",
          items: [
            "Air tidak panas / suhu air kurang panas",
            "MCB / ELCB jepret saat water heater dinyalakan",
            "Lampu indikator mati / unit tidak merespon (mati total)",
            "Modul / mesin tidak bekerja secara otomatis",
            "Pemanas air mengeluarkan suara berisik / bising",
          ],
        },
        {
          type: "leak",
          title: "Kebocoran & Tekanan Air",
          items: [
            "Tangki bocor / air menetes dari bagian bawah unit",
            "Tekanan air panas keluar sangat kecil atau tidak lancar",
            "Kebocoran pada katup pengaman (safety valve)",
            "Kebocoran pada sambungan pipa & selang fleksibel",
            "Suhu air panas tidak stabil / sering berubah",
          ],
        },
        {
          type: "maintenance",
          title: "Perawatan & Kualitas Air",
          items: [
            "Air panas berbau tidak sedap atau keruh",
            "Endapan kerak kapur menumpuk di dalam tangki",
            "Air panas keluar bersama endapan karat / kotoran",
            "Anoda magnesium sudah aus / perlu diganti",
            "Pembersihan berkala (descaling) untuk menjaga keawetan unit",
          ],
        },
      ],
    },
    howItWorks: {
      title: "PROSES CARA KERJA KAMI",
      steps: [
        {
          step: "Step 1: Hubungi & Konsultasi",
          desc: "Jelaskan kendala water heater dan lokasi Anda melalui WhatsApp atau telepon 24 jam.",
          icon: "phone",
        },
        {
          step: "Step 2: Penjadwalan Teknisi",
          desc: "Tim kami menjadwalkan kunjungan teknisi panggilan langsung ke rumah Anda hari ini.",
          icon: "calendar",
        },
        {
          step: "Step 3: Diagnosa & Estimasi",
          desc: "Teknisi melakukan inspeksi unit dan menyampaikan estimasi biaya transparan sebelum dikerjakan.",
          icon: "chat",
        },
        {
          step: "Step 4: Perbaikan & Garansi",
          desc: "Pengerjaan selesai dengan rapi, dilakukan pengujian sistem, dan diterbitkan garansi tertulis.",
          icon: "wrench",
        },
      ],
    },
    whyUs: {
      stats: [
        { label: "Tahun Pengalaman", value: "10+" },
        { label: "Pelanggan Puas", value: "1.000+" },
        { label: "Garansi Suku Cadang", value: "12 Bln" },
        { label: "Respon Panggilan", value: "24/7" },
      ],
      area_title: "JANGKAUAN AREA LAYANAN JAWA TIMUR",
      areas: [
        "Surabaya",
        "Sidoarjo",
        "Gresik",
        "Mojokerto",
        "Pasuruan",
        "Malang",
        "Batu",
        "Lamongan",
        "Tuban",
        "Jombang",
        "Kediri",
        "Madiun",
        "Probolinggo",
        "Bangil",
        "Bangkalan",
      ],
      banner: "Kami Melayani Panggilan Service Water Heater ke Rumah, Apartemen, Hotel, Villa, Perumahan & Industri di Seluruh Jawa Timur!",
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
      ],
    },
    gallery: {
      tag: "PORTOFOLIO KAMI",
      title: "Dokumentasi Hasil Pengerjaan Service Water Heater",
      viewAll: "Lihat Semua Portofolio",
    },
    testimonials: {
      tag: "KATA MEREKA",
      title: "Kepuasan Pelanggan Adalah Prioritas Utama Kami",
      list: [
        { name: "Andi Saputra", role: "Pemilik Perumahan Surabaya", text: "Pelayanannya mantap! Teknisi Amanda House Teknik datang tepat waktu, perbaikan water heater rapi sekali, dan air panas langsung berfungsi lancar kembali." },
        { name: "Siska Wijaya", role: "Pengelola Kos Sidoarjo", text: "Sudah langganan pakai jasa Amanda House Teknik untuk perawatan rutin water heater di tempat kos. Servis descaling berkala bikin unit awet dan hemat listrik." },
        { name: "Budi Santoso", role: "Klien Villa Malang", text: "Pelayanannya sangat jujur dan transparan. Diagnosa masalah dijelaskan secara detail dan harga sparepart sesuai kesepakatan awal." },
        { name: "Rina Amelia", role: "Ibu Rumah Tangga Gresik", text: "Water heater sempat mati total dan tidak mengeluarkan air panas. Setelah dipanggilkan teknisi Amanda House Teknik, perbaikan selesai cepat dan aman." },
        { name: "Hendra Pratama", role: "Pemilik Hotel Batu", text: "Cepat tanggap! Begitu dihubungi via WhatsApp, teknisi spesialis langsung datang hari itu juga untuk menangani instalasi water heater komersial." },
        { name: "Dewi Lestari", role: "Pemilik Apartemen Surabaya", text: "Estimasi harga jelas tanpa biaya tersembunyi. Diberikan garansi tertulis juga. Amanda House Teknik benar-benar jasa service water heater terbaik di Jawa Timur." },
      ],
    },
    contact: {
      tag: "HUBUNGI KAMI",
      cta_title: "BUTUH SERVICE AMANDA HOUSE TEKNIK?",
      cta_sub: "Jangan biarkan mandi air hangat terganggu. Hubungi teknisi water heater profesional kami sekarang!",
      checklist: [
        "Kunjungan Cepat Hari Ini",
        "Teknisi Berpengalaman & Bersertifikat",
        "Komponen Original & Bergaransi Official",
      ],
      cta_wa: "CHAT WHATSAPP",
      cta_schedule: "JADWALKAN KUNJUNGAN",
      phone_number: "0853-3709-3748",
      hours_title: "JAM LAYANAN",
      hours_sub: "Setiap Hari (Senin - Minggu)",
      hours_time: "07.00 - 21.00 WIB (Layanan Darurat 24 Jam)",
      guarantees: [
        {
          title: "GARANSI SPAREPART 12 BULAN",
          desc: "Garansi suku cadang hingga 12 bulan untuk jaminan ketenangan Anda.",
        },
        {
          title: "KOMPONEN SESUAI KEBUTUHAN",
          desc: "Rekomendasi komponen original berdasarkan hasil inspeksi mendalam.",
        },
        {
          title: "TEKNISI BERPENGALAMAN & PRO",
          desc: "Ditangani teknisi spesialis water heater dengan pengalaman 10+ tahun.",
        },
        {
          title: "TRANSPARAN & JUJUR",
          desc: "Tidak ada biaya tersembunyi, estimasi biaya dijelaskan utuh di awal.",
        },
        {
          title: "HOME SERVICE JAWA TIMUR",
          desc: "Melayani seluruh area kota dan kabupaten di Jawa Timur.",
        },
      ],
      office_title: "Alamat Kantor & Workshop",
      address: "Jl. Gunungsari No.15, RT.06/RW.08, Sawunggaling, Kec. Wonokromo, Surabaya, Jawa Timur 60242",
    },
    footer: {
      tagline: "Spesialis service water heater panggilan profesional di Jawa Timur. Teknisi berpengalaman, pengerjaan cepat, dan garansi tertulis.",
      links_title: "AKSES CEPAT",
      services_title: "LAYANAN UNGGULAN",
      contact_title: "HUBUNGI KAMI",
      rights: "© 2026 Amanda House Teknik. Hak cipta dilindungi undang-undang.",
    },
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
      badge: "ON-CALL WATER HEATER SERVICE SPECIALISTS",
      title_main_1: "Professional",
      title_main_2: "Water Heater Service",
      subtitle_highlight: "On-Call Technicians Arrive Today!",
      location: "Serving All East Java Areas",
      cta_wa: "CHAT WHATSAPP",
      cta_wa_sub: "Fast Response 24/7 via WhatsApp",
      feature_1: "10+ Years Experienced Technicians",
      feature_2: "12-Month Spare Part Warranty",
      feature_3: "Serving Entire East Java",
    },
    services: {
      title: "WHY CHOOSE AMANDA HOUSE TEKNIK?",
      items: [
        {
          title: "Experienced Technicians",
          desc: "Dedicated Amanda House Teknik technicians with 10+ years of hands-on expertise.",
        },
        {
          title: "Diagnosis Before Repair",
          desc: "Comprehensive system check before presenting honest repair recommendations.",
        },
        {
          title: "Transparent Pricing",
          desc: "Clear and upfront cost estimates provided before any work commences.",
        },
        {
          title: "Genuine Specification Parts",
          desc: "Replacement parts matching official factory specs and unit requirements.",
        },
        {
          title: "Written Warranty",
          desc: "Written guarantee up to 12 months on all services and replaced components.",
        },
        {
          title: "East Java Home Service",
          desc: "Serving homes, apartments, hotels, villas, and commercial properties across East Java.",
        },
      ],
      list: [
        { title: "Experienced Technicians" },
        { title: "Diagnosis Before Repair" },
        { title: "Transparent Pricing" },
        { title: "Genuine Specification Parts" },
        { title: "Written Warranty" },
        { title: "East Java Home Service" },
      ],
    },
    ourServices: {
      title: "OUR WATER HEATER SERVICES",
      items: [
        {
          title: "Water Heater Repair",
          sub: "No Heating & System Failures",
          desc: "ELCB safety breaker fix, thermostat calibration, heating element replacement, and leak repairs.",
          image: "/images/ars1.webp",
        },
        {
          title: "New Unit Installation",
          sub: "Installation & Relocation",
          desc: "New unit mounting, water heater relocation, and clean piping & electrical setup.",
          image: "/images/ars2.webp",
        },
        {
          title: "Descaling & Maintenance",
          sub: "Scale Removal & Tank Flushing",
          desc: "Limescale removal, tank flushing, and magnesium anode rod replacement for maximum lifespan.",
          image: "/images/ars3.webp",
        },
        {
          title: "Spare Part Replacement",
          sub: "Original & Warranted Parts",
          desc: "High-quality replacement parts matching official water heater factory specifications.",
          image: "/images/ars4.webp",
        },
      ],
    },
    commonIssues: {
      title: "COMMON WATER HEATER ISSUES WE FIX",
      categories: [
        {
          type: "repair",
          title: "System & Heating Failures",
          items: [
            "Water not heating / lukewarm water",
            "MCB / ELCB breaker tripping when turned on",
            "No power / unit completely dead",
            "Automatic module / engine failure",
            "Noisy / loud operational sounds",
          ],
        },
        {
          type: "leak",
          title: "Leaks & Water Pressure",
          items: [
            "Water leaking from bottom of tank",
            "Low hot water flow or inconsistent pressure",
            "Pressure relief safety valve leaking",
            "Leaking pipe joints and flexible hoses",
            "Fluctuating water temperature",
          ],
        },
        {
          type: "maintenance",
          title: "Maintenance & Water Quality",
          items: [
            "Foul smell or cloudy water",
            "Heavy scale buildup inside tank",
            "Rusty or dirty water discharge",
            "Worn out magnesium anode rod",
            "Periodic descaling for longevity",
          ],
        },
      ],
    },
    howItWorks: {
      title: "HOW OUR SERVICE WORKS",
      steps: [
        {
          step: "Step 1: Contact & Consultation",
          desc: "Share your water heater symptoms and address via 24/7 WhatsApp or Phone.",
          icon: "phone",
        },
        {
          step: "Step 2: Technician Dispatch",
          desc: "Our team dispatches an expert technician to your location on the same day.",
          icon: "calendar",
        },
        {
          step: "Step 3: Diagnosis & Estimate",
          desc: "Technician inspects your unit and provides a transparent cost estimate.",
          icon: "chat",
        },
        {
          step: "Step 4: Repair & Warranty",
          desc: "Work completed cleanly, system tested, and official written warranty issued.",
          icon: "wrench",
        },
      ],
    },
    whyUs: {
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Satisfied Clients", value: "1,000+" },
        { label: "Parts Warranty", value: "12 Mos" },
        { label: "Call Response", value: "24/7" },
      ],
      area_title: "EAST JAVA SERVICE COVERAGE",
      areas: [
        "Surabaya",
        "Sidoarjo",
        "Gresik",
        "Mojokerto",
        "Pasuruan",
        "Malang",
        "Batu",
        "Lamongan",
        "Tuban",
        "Jombang",
        "Kediri",
        "Madiun",
        "Probolinggo",
        "Bangil",
        "Bangkalan",
      ],
      banner: "We Provide On-Call Water Heater Services to Homes, Apartments, Hotels, Villas & Industries Across East Java!",
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
      ],
    },
    gallery: {
      tag: "OUR PORTFOLIO",
      title: "Water Heater Service Portfolio & Documentation",
      viewAll: "View All Portfolio",
    },
    testimonials: {
      tag: "TESTIMONIALS",
      title: "Customer Satisfaction Is Our Top Priority",
      list: [
        { name: "Andi Saputra", role: "Homeowner Surabaya", text: "Excellent service! Amanda House Technik technician arrived right on schedule, fixed the water heater issue cleanly, and hot water is working smoothly." },
        { name: "Siska Wijaya", role: "Property Owner Sidoarjo", text: "Regular customer for water heater descaling service. Periodic maintenance keeps our units durable and energy efficient." },
        { name: "Budi Santoso", role: "Villa Client Malang", text: "Very honest and transparent service. The diagnosis was explained thoroughly and pricing matched the initial quote." },
        { name: "Rina Amelia", role: "Housewife Gresik", text: "Water heater was dead with no hot water. Amanda House Technik resolved the issue safely and quickly." },
        { name: "Hendra Pratama", role: "Hotel Manager Batu", text: "Fast response! Reached out via WhatsApp and technician arrived the same day to handle commercial water heater servicing." },
        { name: "Dewi Lestari", role: "Apartment Owner Surabaya", text: "Clear pricing with no hidden fees and a solid written warranty. Truly the best water heater service in East Java." },
      ],
    },
    contact: {
      tag: "CONTACT US",
      cta_title: "NEED AMANDA HOUSE TEKNIK SERVICE?",
      cta_sub: "Don't let hot water issues disrupt your day. Contact our professional water heater technicians now!",
      checklist: [
        "Fast Same-Day Visit",
        "10+ Yrs Certified Technicians",
        "Original Parts & Official Warranty",
      ],
      cta_wa: "CHAT WHATSAPP",
      cta_schedule: "SCHEDULE VISIT",
      phone_number: "0853-3709-3748",
      hours_title: "SERVICE HOURS",
      hours_sub: "Every Day (Mon - Sun)",
      hours_time: "07.00 - 21.00 WIB (24/7 Emergency)",
      guarantees: [
        {
          title: "12-MONTH PARTS WARRANTY",
          desc: "Up to 12 months spare part warranty for complete peace of mind.",
        },
        {
          title: "GENUINE SPECIFICATION PARTS",
          desc: "Original parts recommendation based on deep system inspection.",
        },
        {
          title: "EXPERIENCED & PRO TECHNICIANS",
          desc: "Handled directly by water heater specialists with 10+ years experience.",
        },
        {
          title: "TRANSPARENT & HONEST",
          desc: "No hidden fees, full cost estimate provided upfront.",
        },
        {
          title: "EAST JAVA HOME SERVICE",
          desc: "Serving all cities and regencies in East Java.",
        },
      ],
      office_title: "Office & Workshop Address",
      address: "Jl. Gunungsari No.15, RT.06/RW.08, Sawunggaling, Wonokromo, Surabaya, East Java 60242",
    },
    footer: {
      tagline: "Professional on-call water heater service in East Java. Experienced technicians, fast response, and written warranty.",
      links_title: "QUICK LINKS",
      services_title: "KEY SERVICES",
      contact_title: "CONTACT US",
      rights: "© 2026 Amanda House Teknik. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");

  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = dictionary[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
