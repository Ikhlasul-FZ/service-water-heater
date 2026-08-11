"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Flame, Sun, Droplets } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const cardIcons = [Zap, Flame, Sun, Droplets];

export function OurServices() {
  const { t } = useLanguage();
  const items = t("ourServices.items") || [];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
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
            {t("ourServices.title")}
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

        {/* 2x2 Service Offerings Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item: any, index: number) => {
            const Icon = cardIcons[index % cardIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col sm:flex-row items-stretch group"
              >
                {/* Left Side: Image */}
                <div className="relative w-full sm:w-[42%] h-28 sm:h-auto sm:min-h-55 shrink-0 bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 30vw"
                  />
                </div>

                {/* Right Side: Details */}
                <div className="p-3.5 sm:p-7 flex flex-col justify-center flex-1 text-left">
                  {/* Gold Icon */}
                  <div className="mb-1.5 sm:mb-3 text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-8 sm:h-8 stroke-[1.8]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xs sm:text-base lg:text-lg font-extrabold text-black leading-tight tracking-tight mb-0.5 uppercase">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <h4 className="text-[10px] sm:text-sm font-bold text-slate-700 mb-1 sm:mb-2.5">
                    {item.sub}
                  </h4>

                  {/* Description */}
                  <p className="text-[9.5px] sm:text-sm text-neutral-500 leading-tight sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
