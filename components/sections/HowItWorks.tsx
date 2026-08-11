"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepIcons: Record<string, any> = {
  phone: Phone,
  chat: MessageSquare,
  calendar: Calendar,
  wrench: Wrench,
};

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = t("howItWorks.steps") || [];

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
            {t("howItWorks.title")}
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

        {/* Vertical Timeline Steps */}
        <div className="max-w-2xl mx-auto flex flex-col gap-10 sm:gap-12 relative px-4">
          {steps.map((item: any, index: number) => {
            const Icon = stepIcons[item.icon] || Phone;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start sm:items-center gap-5 sm:gap-8 group"
              >
                {/* Connecting Vertical Line */}
                {!isLast && (
                  <div className="absolute left-6.75 sm:left-8.75 top-13.5 sm:top-17.5 -bottom-10 sm:-bottom-12 w-0.5 bg-[#93c5fd] z-0" />
                )}

                {/* Circular Icon Badge */}
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white border-2 border-[#93c5fd] shadow-xs flex items-center justify-center text-[#2563eb] shrink-0 z-10 group-hover:border-[#2563eb] group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>

                {/* Content Box */}
                <div className="flex flex-col text-left py-1">
                  <h3 className="text-base sm:text-lg font-black text-black tracking-tight mb-1">
                    {item.step}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
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
