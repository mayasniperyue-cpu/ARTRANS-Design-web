import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function PartnershipModel() {
  const containerRef = useScrollReveal(0.08);
  const { t, advisors, language } = useLanguage();

  return (
    <section
      id="model"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden noise border-b border-gold/5"
    >
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">02</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {t("model.subtitle")}
          </span>
        </div>

        {/* Layout grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading and Connector Diagram */}
          <div className="lg:sticky lg:top-32">
            <h2 className="reveal font-display font-black text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.85] tracking-normal uppercase text-white mb-6">
              {language === "EN" ? (
                <>
                  ONE INTERFACE.
                  <br />
                  <span className="text-gold">FULL MEDIA</span>
                  <br />
                  ECOSYSTEM.
                </>
              ) : (
                <>
                  單一對接窗口。
                  <br />
                  <span className="text-gold">完整媒體</span>
                  <br />
                  生態體系。
                </>
              )}
            </h2>
            <p className="reveal font-body text-base text-silver/60 leading-relaxed mb-10 max-w-md">
              {t("model.desc")}
            </p>

            {/* Visual transition diagram (Client -> ARTRANS) */}
            <div className="reveal relative flex items-center gap-6 mt-10">
              {/* Clients Bubble */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white tracking-widest">
                    {t("model.diag.client")}
                  </span>
                </div>
              </div>

              {/* Linking Text Line Spacers */}
              <div className="flex flex-col items-center gap-1 text-gold/60">
                <div className="h-px w-12 bg-gold/40" />
                <span className="font-ui text-[9px] tracking-widest uppercase text-gold/50">{t("model.diag.frame")}</span>
                <span className="font-ui text-[9px] tracking-widest uppercase text-gold/50">{t("model.diag.curate")}</span>
                <span className="font-ui text-[9px] tracking-widest uppercase text-gold/50">{t("model.diag.structure")}</span>
                <span className="font-ui text-[9px] tracking-widest uppercase text-gold/50">{t("model.diag.coordinate")}</span>
                <div className="h-px w-12 bg-gold/40" />
              </div>

              {/* ARTRANS Bubble */}
              <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 flex flex-col items-center justify-center text-center gold-glow">
                <span className="font-display font-bold text-[10px] tracking-widest text-gold leading-tight">
                  ARTRANS
                </span>
                <span className="font-display text-[8px] tracking-widest text-gold/60">MEDIA</span>
                <span className="font-display text-[8px] tracking-widest text-gold/60">PARTNERS</span>
              </div>
            </div>
          </div>

          {/* Right Column: List of Advisors / Layers */}
          <div className="grid grid-cols-1 gap-3">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="reveal glass p-4 flex items-start gap-4 hover:border-gold/30 transition-colors duration-300 group"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Number bullet */}
                <div className="mt-1 w-5 h-5 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                </div>

                {/* Text specs */}
                <div>
                  <div className="font-ui text-xs font-semibold text-silver/80 group-hover:text-gold transition-colors mb-0.5">
                    {advisor.label}
                  </div>
                  <div className="font-body text-xs text-dim leading-relaxed">
                    {advisor.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

