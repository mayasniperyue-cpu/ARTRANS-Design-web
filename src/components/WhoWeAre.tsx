import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function WhoWeAre() {
  const containerRef = useScrollReveal(0.12);
  const { t, language } = useLanguage();

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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Sticky Title & Quote */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <h2 className={`reveal font-display font-black text-[clamp(2.5rem,4.5vw,4rem)] tracking-tight uppercase text-white mb-6 ${language === "EN" ? "leading-[1.0]" : "leading-[1.15]"}`}>
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
            <div className="h-[2px] w-12 bg-gold/40 my-6 reveal" />
            <p className="reveal font-body text-base text-silver/40 italic leading-relaxed">
              {t("who.italic")}
            </p>
          </div>

          {/* Right Column - Deep Partnership details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="reveal glass p-8 md:p-10 border-l-2 border-gold/40 hover:border-gold/60 transition-all duration-300">
              <p className="font-body text-silver/90 text-sm md:text-base leading-relaxed">
                {language === "EN" ? (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS Media Partners</span> is an international media partnership platform that structures project-based collaborations across content, production, media technology digital platforms and commercialization.
                  </>
                ) : (
                  <>
                    <span className="text-gold font-semibold font-sans">ARTRANS Media Partners</span> 是一個國際性的媒體戰略合作平台，專注於圍繞優質內容、影棚製作、媒體科技、數字平台以及商業化運作，構建起以項目為核心的跨界協作體系。
                  </>
                )}
              </p>
            </div>

            <div className="reveal glass p-8 md:p-10 border-l border-gold/15 hover:border-gold/35 transition-all duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}

