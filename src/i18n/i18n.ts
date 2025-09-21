import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import hi from "./hi.json";
import marathi from "./marathi.json";
import tamil from "./tamil.json";
import telugu from "./telugu.json";
import kannada from "./kannada.json";
import bengali from "./bengali.json";
import gujarati from "./gujarati.json";
import punjabi from "./punjabi.json";


i18n
  .use(LanguageDetector) // detects browser/cookie lang
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: marathi },
      ta: { translation: tamil },
      te: { translation: telugu },
      kn: { translation: kannada },
      bn: { translation: bengali },
      pa: { translation: punjabi },
      gu: { translation: gujarati },

    },
    fallbackLng: "en", // default language
    interpolation: { escapeValue: false }
  });

export default i18n;
