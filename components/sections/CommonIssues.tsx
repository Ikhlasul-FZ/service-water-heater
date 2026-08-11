"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Droplets, ShieldAlert, ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categoryIcons: Record<string, any> = {
  repair: Wrench,
  leak: Droplets,
  maintenance: ShieldAlert,
};

export function CommonIssues() {
  const { t } = useLanguage();
  const categories = t("commonIssues.categories") || [];

  // All cards expanded by default, user can toggle
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2]);

  const toggleCategory = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
            {t("commonIssues.title")}
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

        {/* Accordions Stack */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {categories.map((cat: any, index: number) => {
            const Icon = categoryIcons[cat.type] || Wrench;
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-[#3b82f6]/60 transition-all duration-300"
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-white text-left cursor-pointer hover:bg-neutral-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-[#3b82f6] shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-black text-black tracking-tight uppercase">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="text-[#3b82f6] shrink-0 ml-2">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 border-t border-neutral-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-3">
                          {cat.items?.map((item: string) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#3b82f6] fill-[#3b82f6]/20 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
