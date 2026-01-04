import React from "react";
import "@styles/anims/language-switch.scss"
import { useLanguage } from "@pkg/contexts/LanguageContext";

export const LanguageSwitch: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const isFr = language === 'fr';

  function onToggle() {
    if (language === 'fr') changeLanguage('en')
    else changeLanguage('fr')
  }

  return (
    <div
      className={`language-switch ${isFr ? "fr-active" : "en-active"}`}
      onClick={onToggle}
      role="button"
      aria-label="Switch language"
    >
      <span className="flag flag-fr" aria-label="Français">
        🇫🇷
      </span>
      <span className="flag flag-en" aria-label="English">
        🇬🇧
      </span>
    </div>
  );
};
