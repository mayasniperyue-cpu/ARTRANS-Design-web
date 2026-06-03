import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function CollaborationScenarios() {
  const containerRef = useScrollReveal(0.08);
  const { t, scenarios, language } = useLanguage();

  return (
    <section
      id="scenarios"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden noise border-b border-gold/5"
    >
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">06</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {t("scenarios.subtitle")}
          </span>
        </div>

        {/* Section Heading */}
        <div className="reveal mb-14">
          <h2 className={`font-display font-black text-[clamp(2.2rem,5vw,5rem)] tracking-normal uppercase text-white mb-4 ${language === "EN" ? "leading-[0.85]" : "leading-[1.12]"}`}>
            {language === "EN" ? (
              <>
                STRUCTURING
                <br />
                <span className="text-gold">FUTURE-FACING</span>
                <br />
                MEDIA PROJECTS.
              </>
            ) : (
              <>
                構建
                <br />
                <span className="text-gold">面向未來</span>
                <br />
                的媒體項目。
              </>
            )}
          </h2>
          <p className="font-body text-base text-silver/50 italic max-w-2xl">
            {t("scenarios.desc")}
          </p>
        </div>

        {/* Collaboration Scenarios Grid */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.num}
              className="relative group overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-500 rounded-sm"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Scenario image background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={scenario.img}
                  alt={scenario.title}
                  className="w-full h-full object-cover saturate-0 opacity-20 group-hover:opacity-35 group-hover:saturate-50 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
              </div>

              {/* Scenario floating card contents */}
              <div className="relative z-10 p-8 min-h-[240px] flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block font-ui text-[10px] tracking-widest uppercase border border-gold/30 text-gold/70 px-3 py-1 mb-4">
                    SCENARIO {scenario.num}
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-white leading-tight mb-4 group-hover:text-gold transition-colors duration-300">
                    {scenario.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {scenario.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-body text-xs text-silver/50 border border-white/10 px-2.5 py-1 group-hover:border-gold/20 group-hover:text-silver/70 transition-all duration-300 rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

