import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import ArtransLogo from "./ArtransLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, navElements } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy/90 backdrop-blur-xl border-b border-gold/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center text-left"
          >
            <ArtransLogo className="h-6 md:h-7 w-auto transition-all duration-300" />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navElements.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-ui text-xs tracking-widest uppercase text-silver/60 hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {/* Bilingual Style Switcher */}
            <div className="flex items-center gap-1 border border-gold/20 p-0.5 bg-navy-mid/80 rounded-sm">
              <button
                onClick={() => setLanguage("EN")}
                className={`font-mono text-[9px] tracking-wider px-2.5 py-1 transition-all duration-300 cursor-pointer rounded-xs ${
                  language === "EN"
                    ? "text-navy bg-gold font-bold"
                    : "text-silver/40 hover:text-silver/80"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("TC")}
                className={`font-sans text-[9px] tracking-wider px-2.5 py-1 transition-all duration-300 cursor-pointer rounded-xs ${
                  language === "TC"
                    ? "text-navy bg-gold font-bold"
                    : "text-silver/40 hover:text-silver/80"
                }`}
              >
                繁
              </button>
            </div>

            <button
              onClick={() => handleNavClick("#contact")}
              className="font-ui text-xs tracking-widest uppercase border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold/10 hover:border-gold transition-all duration-300 cursor-pointer"
            >
              {t("header.contact")}
            </button>
          </div>

          <button
            className="lg:hidden text-silver hover:text-gold cursor-pointer flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-40 bg-navy/98 backdrop-blur-xl pt-24 pb-10 px-8 border-b border-gold/10"
          >
            <div className="flex flex-col gap-6">
              {navElements.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-2xl font-medium tracking-wider text-silver hover:text-gold text-left transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-white/5 my-2" />

              <div className="flex flex-col gap-4">
                <span className="font-ui text-[10px] tracking-widest uppercase text-gold/60">Select Language / 語言選擇</span>
                <div className="flex items-center gap-2 self-start border border-gold/20 p-1 bg-navy-mid rounded-sm">
                  <button
                    onClick={() => setLanguage("EN")}
                    className={`font-mono text-xs tracking-wider px-4 py-2 transition-all cursor-pointer rounded-xs ${
                      language === "EN"
                        ? "text-navy bg-gold font-bold"
                        : "text-silver/40 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("TC")}
                    className={`font-sans text-xs tracking-wider px-4 py-2 transition-all cursor-pointer rounded-xs ${
                      language === "TC"
                        ? "text-navy bg-gold font-bold"
                        : "text-silver/40 hover:text-white"
                    }`}
                  >
                    繁體中文
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 font-ui text-xs tracking-widest uppercase border border-gold/40 text-gold px-5 py-3 hover:bg-gold/10 transition-all self-start cursor-pointer"
              >
                {t("header.contact")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

