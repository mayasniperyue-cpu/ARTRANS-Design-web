import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

interface ArtransLogoProps {
  className?: string;
  fallbackSizeClass?: string;
}

export function ArtransLogo({ className = "h-6 md:h-7", fallbackSizeClass = "text-xl" }: ArtransLogoProps) {
  const { t } = useLanguage();
  const [isImgError, setIsImgError] = useState(false);

  return (
    <div className="flex flex-col items-start leading-none select-none">
      {!isImgError ? (
        <img
          src="/ARTRANS-logo.png"
          alt="ARTRANS Media Partners"
          onError={() => setIsImgError(true)}
          className={`${className} w-auto object-contain transition-opacity duration-300`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex flex-col text-left">
          <span className={`font-display font-black tracking-wide text-white uppercase leading-none ${fallbackSizeClass}`}>
            AR<span className="text-gold">TRANS</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-silver/40 uppercase italic mt-1 font-semibold">
            {t("header.logo.sub")}
          </span>
        </div>
      )}
    </div>
  );
}

export default ArtransLogo;
