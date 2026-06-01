import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function ConsortiumBuilder() {
  const containerRef = useScrollReveal(0.08);
  const { t, consortiumSteps, language } = useLanguage();

  return (
    <section
      id="consortium"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden noise border-b border-gold/5"
    >
      <div className="absolute inset-0 bg-navy-mid z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">05</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {t("consortium.subtitle")}
          </span>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32">
            <h2 className="reveal font-display font-black text-[clamp(2.2rem,5vw,5rem)] leading-[0.85] tracking-normal uppercase text-white mb-6">
              {language === "EN" ? (
                <>
                  FROM OPPORTUNITY
                  <br />
                  <span className="text-gold">TO CONSORTIUM.</span>
                </>
              ) : (
                <>
                  從發展契機
                  <br />
                  <span className="text-gold">到聯合體。</span>
                </>
              )}
            </h2>
            <p className="reveal font-body text-base text-silver/60 italic leading-relaxed max-w-md">
              {t("consortium.desc")}
            </p>
          </div>

          {/* Right Side Glass box with standard list */}
          <div className="glass p-8 reveal">
            <div className="space-y-0">
              {consortiumSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-5 group">
                  {/* Vertical linking line between bullets */}
                  {index < consortiumSteps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-gold/15" />
                  )}

                  {/* Bullet badge circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 bg-navy group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <span className="font-display font-bold text-sm text-gold">{step.num}</span>
                  </div>

                  {/* Process details */}
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-ui text-[10px] tracking-widest uppercase bg-gold/15 text-gold px-2.5 py-1 border border-gold/20 font-semibold">
                        {step.label}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-base uppercase text-white/80 mb-1 group-hover:text-white transition-colors">
                      {step.title}
                    </h4>
                    <p className="font-body text-sm text-dim leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

