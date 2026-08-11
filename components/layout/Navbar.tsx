"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.projects"), href: "#gallery" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 sm:px-8 md:px-12 lg:px-16",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-0 py-2.5 flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "glass rounded-full shadow-lg border border-white/20 max-w-5xl px-6 sm:px-8"
              : "max-w-7xl"
          )}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "relative transition-all duration-500 group-hover:scale-105 shrink-0",
                isScrolled ? "w-9 h-9" : "w-11 h-11 sm:w-12 sm:h-12"
              )}
            >
              <Image
                src="/images/log.png"
                alt="Amanda House Teknik"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-black tracking-wider uppercase leading-none transition-all duration-500",
                  isScrolled ? "text-black text-base" : "text-white text-lg sm:text-xl"
                )}
              >
                AMANDA
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#d4af37] uppercase mt-0.5">
                HOUSE TEKNIK
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors relative group",
                  isScrolled ? "text-neutral-600 hover:text-black" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <button
                onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
                className={cn(
                  "flex items-center gap-1.5 text-xs font-bold transition-colors uppercase tracking-widest cursor-pointer",
                  isScrolled ? "text-neutral-400 hover:text-black" : "text-white/60 hover:text-white"
                )}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang}
              </button>

              <a
                href="https://wa.me/6285337093748"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-xl transition-colors cursor-pointer",
              isScrolled ? "text-black hover:bg-neutral-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-8 rounded-b-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-b border-neutral-100 max-h-[75vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-medium text-black hover:text-[#d4af37] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between py-4 border-y border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Language / Bahasa
                </span>
                <div className="flex gap-2">
                  {["ID", "EN"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l as any)}
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[10px] transition-all cursor-pointer",
                        lang === l
                          ? "bg-black text-white shadow-md"
                          : "bg-neutral-100 text-neutral-400"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/6285337093748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full h-14 rounded-full gap-3 text-sm shadow-xl"
                  >
                    <Phone className="w-4 h-4" />
                    {t("nav.contact")}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
