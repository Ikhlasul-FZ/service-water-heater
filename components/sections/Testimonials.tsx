"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.list") || [];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Progress bar logic
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#07090c] text-white overflow-hidden relative border-t border-white/10">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase"
          >
            {t("testimonials.tag")}
          </motion.h2>

          {/* Underline Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 mb-4"
          />

          <p className="text-xs sm:text-sm text-neutral-400 font-medium max-w-lg mx-auto">
            {t("testimonials.title")}
          </p>
        </div>

        {/* Top Controls */}
        <div className="flex justify-end gap-3 mb-6 max-w-6xl mx-auto px-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#d4af37]/50 bg-black/60 text-[#f3cf7a] hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#d4af37]/50 bg-black/60 text-[#f3cf7a] hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory max-w-6xl mx-auto no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testi: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-72.5 sm:min-w-90 lg:min-w-95 snap-start"
            >
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#0c0f15] border border-white/15 hover:border-[#d4af37]/60 shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#d4af37]/20 transition-colors duration-300" />

                {/* 5 Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#d4af37]">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#d4af37] stroke-[1.5]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6 relative z-10 italic">
                  &quot;{testi.text}&quot;
                </p>

                {/* User Info */}
                <div className="mt-auto pt-4 border-t border-white/10 relative z-10 flex flex-col">
                  <p className="font-extrabold text-sm sm:text-base text-white tracking-tight leading-tight">
                    {testi.name}
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold text-[#d4af37] uppercase tracking-wider mt-0.5">
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar Container */}
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#d4af37]"
              style={{ scaleX, originX: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
