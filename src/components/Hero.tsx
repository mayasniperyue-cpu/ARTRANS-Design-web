import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden noise">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop"
          alt="Media studio"
          className="w-full h-full object-cover animate-pan opacity-30 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
      </div>

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 grid-bg z-0 opacity-40" />

      {/* Background Graphic Decor */}
      <div className="absolute top-[8%] right-[-4%] text-[20rem] md:text-[34rem] font-black text-white/[0.02] select-none pointer-events-none tracking-normal leading-none z-0 font-display">
        ART
      </div>

      {/* Spotlight blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(194,154,100,0.05) 0%, rgba(12,12,12,0) 70%)"
        }}
      />

      {/* Slanted lines visual design accent */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="absolute top-0 h-full w-px"
            style={{
              left: `${15 + index * 14}%`,
              background: "linear-gradient(to bottom, transparent, rgba(194,154,100,0.03) 30%, rgba(194,154,100,0.06) 60%, transparent)",
              transform: "skewX(-15deg)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-gold/50" />
          <span className="font-ui text-[11px] tracking-[0.35em] uppercase text-gold/80 font-bold">
            {t("hero.transformation")}
          </span>
          <div className="h-px w-12 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[clamp(4.5rem,13vw,10.5rem)] leading-[0.82] tracking-normal uppercase text-white mb-2"
        >
          ARTRANS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[clamp(2.2rem,8.5vw,6rem)] leading-[0.82] tracking-wide uppercase text-transparent mb-10 text-stroke"
        >
          {t("hero.partners")}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="w-32 h-px bg-gold/40 mx-auto mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-silver/70 italic max-w-xl mx-auto mb-14 leading-relaxed animate-fade-in"
        >
          {t("hero.line")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollClick("#who-we-are")}
            className="group font-ui text-xs tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold-light transition-all duration-300 font-semibold cursor-pointer"
          >
            {t("hero.btn.discover")}
          </button>
          <button
            onClick={() => handleScrollClick("#contact")}
            className="font-ui text-xs tracking-widest uppercase border border-white/20 text-silver/70 px-8 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300 cursor-pointer"
          >
            {t("hero.btn.initiate")}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-8 font-ui text-[10px] tracking-[0.2em] uppercase text-dim flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
        <span>{t("hero.live")}</span>
      </motion.div>

      {/* Decorative center scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollClick("#who-we-are")}
      >
        <div className="w-[18px] h-[30px] rounded-full border border-silver/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full scroll-dot" />
        </div>
        <span className="font-ui text-[8px] tracking-widest text-silver/40 uppercase">
          {t("hero.scroll")}
        </span>
      </motion.div>
    </section>
  );
}

