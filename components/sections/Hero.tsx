"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, MapPin, Wrench, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#07090c] text-white">
      {/* Background Image with Dark Vignette & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero3.webp"
          alt="Amanda House Teknik Service Water Heater"
          fill
          className="object-cover object-center opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07090c]/70 to-[#07090c]" />
        <div className="absolute inset-0 bg-linear-to-b from-[#07090c]/90 via-[#07090c]/50 to-[#07090c]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto flex flex-col items-center text-center max-w-5xl">
        {/* Top Gold Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/70 bg-black/70 backdrop-blur-md text-[#f3cf7a] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-6 sm:mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <Shield className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]/20" />
          <span>{t("hero.badge")}</span>
        </motion.div>

        {/* Main Title (H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight mb-4 sm:mb-6 uppercase"
        >
          {t("hero.title_main_1")}{" "}
          <span className="text-[#f5cb42] block sm:inline">
            {t("hero.title_main_2")}
          </span>
        </motion.h1>

        {/* Subtitle & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-6 sm:mb-8 space-y-3"
        >
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-200 tracking-wide max-w-2xl">
            {t("hero.subtitle_highlight")}
          </p>

          <div className="inline-flex items-center gap-2 bg-black/60 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#f3cf7a]">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>{t("hero.location")}</span>
          </div>
        </motion.div>

        {/* Clean Minimal Brand Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mb-8 sm:mb-10 px-2"
        >
          {[
            "ARISTON",
            "MODENA",
            "RINNAI",
            "BEKO",
            "ELECTROLUX",
            "FERROLI",
            "PALOMA",
            "DAIBA",
            "SOLAHART",
            "WIKA",
          ].map((brand) => (
            <span
              key={brand}
              className="bg-black/60 border border-white/15 backdrop-blur-md rounded-full px-3.5 py-1 text-[10px] sm:text-xs font-extrabold text-neutral-300 tracking-wider hover:border-[#d4af37]/60 hover:text-[#f3cf7a] transition-all"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Action Call Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center w-full max-w-md mb-8 sm:mb-12"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6285337093748"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white rounded-2xl sm:rounded-full py-4 px-8 sm:px-10 shadow-[0_10px_35px_rgba(37,211,102,0.4)] transition-all duration-300 w-full sm:w-auto font-extrabold uppercase text-sm sm:text-base tracking-wider"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white shrink-0 group-hover:scale-110 transition-transform"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{t("hero.cta_wa")}</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Feature Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 relative z-10 border-t border-white/10 pt-5"
      >
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-neutral-300">
          <div className="flex items-center gap-2 font-semibold">
            <Wrench className="w-4 h-4 text-[#d4af37]" />
            <span>{t("hero.feature_1")}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>{t("hero.feature_2")}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>{t("hero.feature_3")}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
