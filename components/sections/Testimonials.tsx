"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.list");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 lg:py-32 bg-[#050505] text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("testimonials.tag")}</h2>
            <h3 className="text-3xl lg:text-5xl font-medium tracking-tight leading-tight">
              {t("testimonials.title")}
            </h3>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end gap-4">
             <button 
               onClick={prev}
               className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group"
             >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
             </button>
             <button 
               onClick={next}
               className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group"
             >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -500) next();
                else if (swipe > 500) prev();
              }}
              className="w-full max-w-4xl mx-auto cursor-grab active:cursor-grabbing"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] lg:rounded-[64px] p-10 lg:p-20 relative overflow-hidden group">
                 {/* Large decorative quote icon */}
                 <Quote className="absolute -top-10 -left-10 w-40 h-40 text-primary/5 rotate-12" />
                 
                 <div className="relative z-10">
                    <div className="flex gap-1 mb-10 text-primary justify-center lg:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <ThumbsUp key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-xl lg:text-3xl font-serif italic mb-12 lg:mb-16 text-neutral-200 leading-relaxed text-center lg:text-left">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </p>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-6 border-t border-white/10 pt-10">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold border border-primary/30 uppercase">
                         {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-bold text-xl lg:text-2xl text-white tracking-tight">{testimonials[currentIndex].name}</p>
                        <p className="text-xs lg:text-sm text-neutral-500 uppercase tracking-[0.2em] mt-2 font-medium">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="absolute -bottom-12 flex gap-3">
             {testimonials.map((_: any, i: number) => (
               <button
                 key={i}
                 onClick={() => {
                   setDirection(i > currentIndex ? 1 : -1);
                   setCurrentIndex(i);
                 }}
                 className={`h-2 transition-all duration-500 rounded-full ${
                   i === currentIndex ? "w-10 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                 }`}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
