"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ShieldCheck, ChevronRight, Star, Clock, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "../ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] lg:h-[100dvh] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Layer with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero3.webp"
          alt="Water Heater Service Luxury"
          fill
          sizes="100vw"
          className="object-cover opacity-60 lg:opacity-80 transition-all duration-1000 scale-105"
          priority
        />
        {/* Complex Gradient Overlay for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10 lg:hidden" />
        
        {/* Subtle radial glow to highlight the gold theme */}
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 text-primary text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,7vw,6rem)] font-medium leading-[1.1] mb-8 tracking-tight text-white whitespace-nowrap"
          >
            <span>{t("hero.title_1")}</span>
            <span className="text-primary italic font-serif relative inline-block mx-2">
              {t("hero.title_italic")}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full"
              />
            </span>
            <span>{t("hero.title_2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-6"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="h-14 lg:h-16 w-full px-10 rounded-full text-base font-bold shadow-[0_20px_50px_rgba(161,98,7,0.3)] hover:shadow-primary/40 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  {t("hero.cta_quote")}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </a>
            <a
              href="https://wa.me/6285190876262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="h-14 lg:h-16 w-full px-10 rounded-full text-base font-bold text-white hover:text-black hover:bg-white transition-all bg-white/5 backdrop-blur-md border border-white/10 group">
                <WhatsAppIcon className="w-6 h-6 mr-3 group-hover:text-black transition-colors" />
                {t("hero.cta_wa")}
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-10"
          >
            <div className="flex items-center gap-2 text-neutral-400">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase">Bergaransi Resmi</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase">Teknisi Ahli</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase">Layanan 24/7</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative minimalist elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
