"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { id: "01", title: "Perbaikan Water Heater", desc: "Perbaikan Thermostat & ELCB", image: "/images/ars1.webp" },
  { id: "02", title: "Service Water Heater Panggilan", desc: "Perbaikan Pemantik & Valve", image: "/images/ars2.webp" },
  { id: "03", title: "Servis Pemanas Air", desc: "Kuras Tangki & Perbaikan Bocor", image: "/images/ars3.webp" },
  { id: "04", title: "Descaling & Pembersihan Kerak", desc: "Penggantian Anoda Magnesium", image: "/images/ars4.webp" },
  { id: "05", title: "Service Ariston Water Heater", desc: "Ganti Elemen Pemanas", image: "/images/ars5.webp" },
  { id: "06", title: "Service Modena Water Heater", desc: "Kalibrasi Modul & Sensor", image: "/images/ars6.webp" },
  { id: "07", title: "Service WIKA Water Heater", desc: "Perbaikan Panel & Pipa", image: "/images/ars7.webp" },
  { id: "08", title: "Pemasangan Unit Baru", desc: "Instalasi Pipa & Safety Valve", image: "/images/ars8.webp" },
];

const allArchives = [
  ...projects,
  { id: "09", title: "Service Water Heater Rinnai", desc: "Perbaikan Kelistrikan & Sensor", image: "/images/ars9.webp" },
  { id: "10", title: "Service Water Heater Beko", desc: "Pembersihan Elemen & Pipa", image: "/images/ars10.webp" },
  { id: "11", title: "Service Paloma Water Heater", desc: "Ganti Membrane & Selang", image: "/images/ars11.webp" },
  { id: "12", title: "Service Ferroli Water Heater", desc: "Ganti Termostat Dual System", image: "/images/ars12.webp" },
  { id: "13", title: "Service Electrolux Tank", desc: "Perbaikan Tangki & Seal", image: "/images/ars13.webp" },
  { id: "14", title: "Service Daiba Water Heater", desc: "Perbaikan Modul Automatic", image: "/images/ars14.webp" },
];

export function Gallery() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
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
            {t("gallery.tag")}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#3b82f6]/60 transition-all duration-300 flex flex-col"
              onClick={() => setSelectedImage(project.image)}
            >
              {/* Image Box */}
              <div className="aspect-4/5 w-full bg-neutral-100 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-extrabold text-[#60a5fa] border border-white/10 uppercase tracking-widest">
                  #{project.id}
                </div>

                {/* Hover Blue Overlay Icon */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex flex-col text-left bg-white">
                <h3 className="text-xs sm:text-sm font-extrabold text-black group-hover:text-[#2563eb] transition-colors line-clamp-1 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-neutral-500 font-normal line-clamp-1 mt-0.5">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center justify-center gap-3 bg-[#0a0d12] hover:bg-[#151921] border border-[#3b82f6]/80 text-[#60a5fa] px-8 py-4 rounded-xl sm:rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-[#3b82f6]" />
            <span>{t("gallery.viewAll")}</span>
          </button>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#07090c] text-white flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
              <div className="flex flex-col text-left">
                <h2 className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest">
                  {t("gallery.tag")}
                </h2>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Dokumentasi Lengkap Portofolio Service Water Heater
                </h3>
              </div>
              <button
                onClick={() => setShowAll(false)}
                className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#3b82f6] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {allArchives.map((item, i) => (
                    <div
                      key={`${item.id}-${i}`}
                      className="bg-black/60 border border-white/15 rounded-2xl overflow-hidden cursor-pointer group hover:border-[#3b82f6]/60 transition-all"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <div className="aspect-4/5 relative bg-neutral-900">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-lg">
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 text-left">
                        <h4 className="text-xs font-extrabold text-white uppercase line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-neutral-400 font-medium line-clamp-1 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-[#3b82f6] hover:text-white flex items-center justify-center transition-all z-10 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl h-[75vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen Preview"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
