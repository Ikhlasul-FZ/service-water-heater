"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  Truck,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const guaranteeIcons = [ShieldCheck, Award, Wrench, CheckCircle2, Truck];

export function Contact() {
  const { t } = useLanguage();
  const checklist = t("contact.checklist") || [];
  const guarantees = t("contact.guarantees") || [];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Split Card Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0d12] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto mb-16 sm:mb-20"
        >
          {/* Left Column: Text Content & Actions */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white mb-4">
                BUTUH SERVICE <br />
                <span className="text-[#38bdf8]">AMANDA HOUSE TEKNIK?</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 mb-6 font-normal leading-relaxed">
                {t("contact.cta_sub")}
              </p>

              {/* Checklist Items */}
              <div className="space-y-3 mb-8">
                {checklist.map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                      <CheckCircle2 className="w-4 h-4 fill-[#3b82f6]/30" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Stack */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6285337093748"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all uppercase text-xs sm:text-sm tracking-wider"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t("contact.cta_wa")}</span>
              </a>

              {/* Schedule Visit Button */}
              <a
                href="https://wa.me/6285337093748?text=Halo%20Amanda%20House%20Teknik,%20saya%20ingin%20menjadwalkan%20kunjungan%20teknisi%20service%20water%20heater."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black/60 border border-[#3b82f6]/70 hover:bg-[#3b82f6]/20 text-[#60a5fa] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all uppercase text-xs sm:text-sm tracking-wider"
              >
                <Calendar className="w-4 h-4 text-[#3b82f6]" />
                <span>{t("contact.cta_schedule")}</span>
              </a>

              {/* Phone Direct Button */}
              <a
                href="tel:085337093748"
                className="w-full bg-black/60 border border-[#3b82f6]/70 hover:bg-[#3b82f6]/20 text-[#60a5fa] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all uppercase text-xs sm:text-sm tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#3b82f6]" />
                <span>{t("contact.phone_number")}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative min-h-70 sm:min-h-87.5 lg:min-h-full w-full bg-neutral-900 overflow-hidden">
            <Image
              src="/images/hero3.webp"
              alt="Amanda House Teknik Service Water Heater"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0d12] via-transparent to-transparent lg:hidden" />
          </div>
        </motion.div>

        {/* Service Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-sky-200/80 rounded-2xl p-6 sm:p-7 shadow-xs max-w-xl mx-auto text-center mb-10 flex items-center justify-center gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-[#2563eb]/15 border border-[#3b82f6]/40 flex items-center justify-center text-[#2563eb] shrink-0">
            <Clock className="w-7 h-7 stroke-[1.8]" />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-base sm:text-lg font-black text-black tracking-tight uppercase">
              {t("contact.hours_title")}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              {t("contact.hours_sub")}
            </p>
            <p className="text-xs sm:text-sm font-extrabold text-[#2563eb]">
              {t("contact.hours_time")}
            </p>
          </div>
        </motion.div>

        {/* Guarantees Feature Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0a0d12] rounded-3xl p-6 sm:p-8 lg:p-10 max-w-xl mx-auto text-white border border-white/10 shadow-2xl divide-y divide-white/10 mb-16"
        >
          {guarantees.map((g: any, index: number) => {
            const Icon = guaranteeIcons[index % guaranteeIcons.length];
            return (
              <div
                key={g.title}
                className={`flex items-start gap-4 sm:gap-5 ${
                  index === 0
                    ? "pb-6 sm:pb-7"
                    : index === guarantees.length - 1
                    ? "pt-6 sm:pt-7"
                    : "py-6 sm:py-7"
                }`}
              >
                <div className="text-[#3b82f6] shrink-0 pt-0.5">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight uppercase mb-1">
                    {g.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Location & Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-lg relative min-h-95 sm:min-h-112.5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4463886463022!2d112.72363597537674!3d-7.303641671802792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb835ad5ba07%3A0x21e2cf98ef703d2c!2sJl.%20Gunungsari%20No.15%2C%20RT.06%2FRW.08%2C%20Sawunggaling%2C%20Kec.%20Wonokromo%2C%20Surabaya%2C%20Jawa%20Timur%2060242!5e0!3m2!1sen!2sid!4v1777634841942!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-95 sm:h-112.5"
          />

          {/* Address Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto sm:max-w-md bg-black/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20 shadow-xl text-white text-left">
            <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-extrabold uppercase tracking-widest mb-2">
              <MapPin className="w-4 h-4" />
              <span>{t("contact.office_title")}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-200 leading-relaxed">
              {t("contact.address")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
