import { useLanguage } from "../hooks/useLanguage";
import ArtransLogo from "./ArtransLogo";

export default function Footer() {
  const { t, navElements } = useLanguage();

  const handleNavClick = (href: string) => {
    const r = document.querySelector(href);
    if (r) {
      r.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-navy border-t border-gold/10 py-12 px-6 noise">
      <div className="max-w-7xl mx-auto">
        {/* Upper tier layout block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
          {/* Logo block */}
          <div>
            <ArtransLogo className="h-14 w-auto max-w-[200px]" />
          </div>

          {/* Quick link navigation items */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navElements.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-ui text-[11px] tracking-widest uppercase text-dim hover:text-gold transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right contact text specs */}
          <div className="text-left md:text-right">
            <a
              href="mailto:contact@artrans.hk"
              className="font-body text-sm text-silver/50 hover:text-gold transition-colors block mb-1"
            >
              contact@artrans.hk
            </a>
            <a
              href="https://www.artrans.hk"
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-silver/40 hover:text-gold/70 transition-colors block"
            >
              www.artrans.hk
            </a>
          </div>
        </div>

        {/* Lower tier copyright block */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <div className="font-ui text-[10px] tracking-widest uppercase text-dim">
            © {new Date().getFullYear()} ARTRANS Media Partners. Hong Kong.
          </div>
          <div className="font-ui text-[10px] tracking-widest uppercase text-dim italic">
            {t("hero.transformation")}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
            <span className="font-ui text-[10px] tracking-widest uppercase text-dim">
              {t("hero.live")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

