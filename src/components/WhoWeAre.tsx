import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function WhoWeAre() {
  const containerRef = useScrollReveal(0.12);
  const { t, language } = useLanguage();

  const stats = [
    { value: "4", label: t("who.stats.pillars") },
    { value: "7+", label: t("who.stats.partners") },
    { value: "HK", label: t("who.stats.based") }
  ];

  return (
    <section
      id="who-we-are"
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden noise border-b border-gold/5"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-navy-mid z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-40" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">01</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">{t("who.subtitle")}</span>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <h2 className="reveal font-display font-black text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-normal uppercase text-white mb-10">
              {language === "EN" ? (
                <>
                  AN INTERNATIONAL
                  <br />
                  <span className="text-gold">MEDIA PARTNERSHIP</span>
                  <br />
                  PLATFORM
                </>
              ) : (
                <>
                  國際媒體
                  <br />
                  <span className="text-gold">戰略合作</span>
                  <br />
                  平台
                </>
              )}
            </h2>
            <p className="reveal font-body text-base text-silver/50 italic leading-relaxed mb-8">
              {t("who.italic")}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="reveal glass p-8 border-l-2 border-gold/40">
              <p className="font-body text-silver/80 text-sm md:text-base leading-relaxed">
                {language === "EN" ? (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS Media Partners</span> is an international media partnership platform that structures project-based collaborations across content, production, media technology digital platforms and commercialization.
                  </>
                ) : (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS 媒體合夥人</span> 是一個國際性的媒體戰略合作平台，專注於圍繞優質內容、影棚製作、媒體科技、數字平台以及商業化運作，構建起以項目為核心的跨界協作體系。
                  </>
                )}
              </p>
            </div>

            <div className="reveal glass p-8">
              <p className="font-body text-silver/70 text-sm leading-relaxed">
                {language === "EN" ? (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS</span> helps clients structure project-based partnerships by assembling the right combination of strategic, creative, technological and operational partners for future-facing media opportunities.
                  </>
                ) : (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS</span> 靈活匯聚市場中最契合的戰略、創意、技術和運營合作夥伴，幫助客戶構建最符合項目實質目標與演進路線的合夥架構，從容把握面向未來的媒體機遇。
                  </>
                )}
              </p>
            </div>

            {/* Stats row */}
            <div className="reveal grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center border border-gold/10 p-4 bg-navy/20">
                  <div className="font-display font-bold text-2xl md:text-3xl text-gold">{stat.value}</div>
                  <div className="font-ui text-[9px] md:text-[10px] tracking-widest uppercase text-dim mt-1">
                    {stat.label}
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

