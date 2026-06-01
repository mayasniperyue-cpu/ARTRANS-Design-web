import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function StructuringEcosystem() {
  const containerRef = useScrollReveal(0.08);
  const [activePillar, setActivePillar] = useState(0);
  const { t, pillars, language } = useLanguage();

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden noise border-b border-gold/5"
    >
      {/* Background visual styles */}
      <div className="absolute inset-0 bg-navy-mid z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">03</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {t("ecosystem.subtitle")}
          </span>
        </div>

        {/* Section Intro */}
        <div className="reveal mb-14">
          <h2 className="font-display font-black text-[clamp(2.2rem,5vw,5rem)] leading-[0.85] tracking-normal uppercase text-white mb-4">
            {language === "EN" ? (
              <>
                FROM PARTNER EXPERTISE
                <br />
                <span className="text-gold">TO PROJECT-READY</span>
                <br />
                SOLUTIONS.
              </>
            ) : (
              <>
                從夥伴專業能力
                <br />
                <span className="text-gold">到項目就緒</span>
                <br />
                解決方案。
              </>
            )}
          </h2>
          <p className="font-body text-base text-silver/50 italic max-w-xl">
            {t("ecosystem.desc")}
          </p>
        </div>

        {/* Capability Pillars GRID - Applying reveal to the parent container ensures full layout stability */}
        <div className="reveal grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={pillar.num}
                onClick={() => {
                  if (activePillar !== idx) {
                    setActivePillar(idx);
                  }
                }}
                className={`glass p-6 cursor-pointer group border transition-all duration-500 rounded-sm ${
                  isActive
                    ? "border-gold/50 bg-gold/5 shadow-lg shadow-gold/2"
                    : "border-transparent hover:border-gold/20"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Pillar ID Tag */}
                <div
                  className={`inline-block font-ui text-[10px] tracking-widest uppercase px-3 py-1 mb-5 border transition-colors ${
                    isActive
                      ? "border-gold/60 text-gold bg-gold/10"
                      : "border-gold/20 text-gold/60"
                  }`}
                >
                  PILLAR {pillar.num}
                </div>

                {/* Pillar Title */}
                <h3
                  className={`font-display font-bold text-xl uppercase leading-tight mb-4 transition-colors ${
                    isActive ? "text-gold" : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="font-body text-sm text-silver/50 leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Core Alignment Subhead and tags */}
                <div>
                  <div className="font-ui text-[10px] tracking-widest uppercase text-gold/50 mb-3 font-semibold">
                    {t("ecosystem.alignment")}
                  </div>
                  <div className="font-display font-semibold text-sm text-silver/70">
                    {pillar.tags.map((tag, i) => (
                      <span key={i} className="inline-block">
                        {tag}
                        {i < pillar.tags.length - 1 && (
                          <span className="text-gold/40 mx-1.5">&#47;</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

