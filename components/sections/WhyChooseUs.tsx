"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Star, Truck, Award, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const statIcons = [Users, Star, Truck, Award];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const stats = t("whyUs.stats") || [];
  const areas = t("whyUs.areas") || [];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Dark Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-[#0a0d12] text-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-16 sm:mb-20 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat: any, index: number) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center px-4 ${
                    index >= 2 ? "pt-6 md:pt-0" : ""
                  }`}
                >
                  <div className="mb-3 text-[#3b82f6]">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#60a5fa] mb-1 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase"
          >
            {t("whyUs.area_title")}
          </motion.h2>

          {/* Underline Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#3b82f6] mx-auto mt-4"
          />
        </div>

        {/* Coverage Areas 3-Column List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 px-1 sm:px-4"
        >
          {areas.map((area: string) => (
            <div
              key={area}
              className="flex items-center gap-1.5 sm:gap-3 bg-white p-2 sm:p-3.5 rounded-xl border border-neutral-200/70 hover:border-[#3b82f6]/60 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#3b82f6] fill-[#3b82f6]/20 shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-neutral-800 tracking-tight leading-tight line-clamp-2">
                {area}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-4xl mx-auto bg-[#f0f9ff] border border-[#bae6fd] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left shadow-xs"
        >
          <div className="w-12 h-12 rounded-full bg-[#3b82f6]/15 flex items-center justify-center shrink-0">
            <MapPin className="w-7 h-7 text-[#2563eb] fill-[#2563eb]/30" />
          </div>
          <p className="text-base sm:text-lg font-extrabold text-neutral-900 leading-snug">
            {t("whyUs.banner")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
