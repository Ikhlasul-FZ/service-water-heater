"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#06080a] text-white pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 max-w-6xl mx-auto text-left">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 transition-transform group-hover:scale-105 shrink-0">
                <Image
                  src="/images/log.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider uppercase leading-none text-white text-lg sm:text-xl">
                  AMANDA
                </span>
                <span className="text-[8px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#d4af37] uppercase mt-0.5">
                  HOUSE TEKNIK
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#f3cf7a] uppercase tracking-widest mb-5">
              {t("footer.links_title")}
            </h4>
            <ul className="space-y-3">
              {[
                { name: t("nav.services"), href: "#services" },
                { name: t("nav.whyUs"), href: "#why-us" },
                { name: t("nav.projects"), href: "#gallery" },
                { name: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-[#f3cf7a] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 group-hover:bg-[#d4af37] transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#f3cf7a] uppercase tracking-widest mb-5">
              {t("footer.services_title")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              {[
                "Service Water Heater Listrik",
                "Service Water Heater Gas",
                "Service Solahart & Solar",
                "Descaling & Kuras Tangki",
              ].map((service: string) => (
                <li
                  key={service}
                  className="hover:text-[#f3cf7a] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#f3cf7a] uppercase tracking-widest mb-6">
              {t("footer.contact_title")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/6285337093748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-xs">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider leading-none mb-1">
                      Telepon & WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#f3cf7a] transition-colors leading-tight">
                      0853-3709-3748
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:amandahouseteknik@gmail.com"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-xs">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider leading-none mb-1">
                      Email Resmi
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#f3cf7a] transition-colors leading-tight break-all">
                      amandahouseteknik@gmail.com
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 shadow-xs">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider leading-none mb-1">
                      Area Layanan
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                      Seluruh Jawa Timur
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-neutral-400 font-medium">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              Bergaransi Resmi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#d4af37]" />
              Teknisi Berpengalaman
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
