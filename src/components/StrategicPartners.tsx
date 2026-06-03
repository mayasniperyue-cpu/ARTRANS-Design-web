import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";
import { Partner } from "../types";

interface PartnerModalProps {
  partner: Partner;
  onClose: () => void;
}

export function PartnerModal({ partner, onClose }: PartnerModalProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Semi-transparent Backdrop */}
      <div className="absolute inset-0 bg-navy/95 backdrop-blur-xl" />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl glass border border-gold/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-12">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-block font-ui text-[10px] tracking-widest uppercase border border-gold/40 text-gold/80 px-3 py-1 mb-4">
                {t("partners.tag")}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-tight mb-2">
                {partner.name}
              </h3>
              <p className="font-body text-gold/70 italic text-sm">{partner.role}</p>
            </div>
            <button
              onClick={onClose}
              className="text-dim hover:text-white transition-colors ml-4 flex-shrink-0 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sub-images Grid */}
          {partner.images && partner.images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-8">
              {partner.images.map((img, idx) => (
                <div key={idx} className="relative h-28 overflow-hidden border border-gold/10 group/img">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover saturate-[0.85] hover:saturate-100 opacity-85 hover:opacity-100 scale-100 hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          )}

          {/* Two-column details block */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Col */}
            <div>
              <div className="font-ui text-[10px] tracking-widest uppercase text-gold/50 mb-3 font-semibold">
                {t("partners.modal.role")}
              </div>
              <p className="font-body text-sm text-silver/70 leading-relaxed mb-8">{partner.desc}</p>

              <div className="font-ui text-[10px] tracking-widest uppercase text-gold/50 mb-3 font-semibold">
                {t("partners.modal.expertise")}
              </div>
              <div className="flex flex-wrap gap-2">
                {partner.expertise.map((exp, idx) => (
                  <span
                    key={idx}
                    className="font-ui text-[10px] uppercase tracking-wider border border-white/10 text-silver/60 px-2 py-1 bg-navy-mid/30"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col */}
            <div>
              <div className="font-ui text-[10px] tracking-widest uppercase text-gold/50 mb-3 font-semibold">
                {t("partners.modal.experience")}
              </div>
              <div className="space-y-3">
                {partner.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                    <p className="font-body text-sm text-silver/70 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StrategicPartners() {
  const containerRef = useScrollReveal(0.08);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const { t, partners, language } = useLanguage();

  return (
    <>
      <section
        id="partners"
        ref={containerRef}
        className="relative py-32 md:py-40 overflow-hidden noise border-b border-gold/5"
      >
        <div className="absolute inset-0 bg-navy z-0" />
        <div className="absolute inset-0 grid-bg z-0 opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Indicator */}
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">04</span>
            <div className="h-px w-16 bg-gold/30" />
            <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
              {t("partners.subtitle")}
            </span>
          </div>

          {/* Section Heading */}
          <div className="reveal mb-14">
            <h2 className={`font-display font-black text-[clamp(2.2rem,5vw,5rem)] tracking-normal uppercase text-white mb-4 ${language === "EN" ? "leading-[0.85]" : "leading-[1.15]"}`}>
              {language === "EN" ? (
                <>
                  SPECIALIST PARTNERS
                  <br />
                  <span className="text-gold">ALIGNED TO</span>
                  <br />
                  PROJECT NEEDS.
                </>
              ) : (
                <>
                  對齊項目需求的
                  <br />
                  <span className="text-gold">專業夥伴</span>
                  <br />
                  生態。
                </>
              )}
            </h2>
          </div>

          {/* Partner Grid Cards */}
          <div className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, idx) => (
              <button
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className="glass text-left group border border-transparent hover:border-gold/30 transition-all duration-400 flex flex-col overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Image thumb */}
                <div className="relative h-40 w-full overflow-hidden flex-shrink-0">
                  <img
                    src={partner.thumb}
                    alt={partner.name}
                    className="w-full h-full object-cover saturate-0 group-hover:saturate-50 opacity-50 group-hover:opacity-70 transition-all duration-500 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-navy-mid/40 to-transparent" />
                </div>

                {/* Info block */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-display font-bold text-sm uppercase leading-tight text-white/80 group-hover:text-white transition-colors mb-1 min-h-[40px] line-clamp-2">
                      {partner.name}
                    </h3>
                    <p className="font-body text-xs text-gold/60 italic leading-snug line-clamp-1">
                      {partner.role}
                    </p>
                  </div>

                  {/* Foot Action */}
                  <div className="mt-auto flex items-center gap-2 text-gold/40 group-hover:text-gold transition-colors pt-2">
                    <span className="font-ui text-[10px] uppercase tracking-widest">
                      {t("partners.viewProfile")}
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup with dynamic anim state */}
      <AnimatePresence>
        {selectedPartner && (
          <PartnerModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

