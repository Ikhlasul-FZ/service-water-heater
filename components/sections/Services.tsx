"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Search, Banknote, Settings, ShieldCheck, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [UserCheck, Search, Banknote, Settings, ShieldCheck, Home];

export function Services() {
  const { t } = useLanguage();
  const servicesItems = t("services.items") || [];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase"
          >
            {t("services.title")}
          </motion.h2>

          {/* Underline Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4"
          />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {servicesItems.map((item: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-8 lg:p-10 flex flex-col items-center text-center hover:shadow-xl hover:border-[#d4af37]/60 transition-all duration-300 group"
              >
                {/* Gold Icon */}
                <div className="mb-2 sm:mb-5 text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-[1.5]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[11px] sm:text-base lg:text-xl font-extrabold text-black mb-1 sm:mb-3 leading-tight tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[9.5px] sm:text-xs lg:text-sm text-neutral-500 leading-tight sm:leading-relaxed font-normal max-w-xs line-clamp-3 sm:line-clamp-none">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
