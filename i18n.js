import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { ru, ua } from "./locolizations";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    ua: { translation: ua },
  },
  lng: "ru", // язык по умолчанию
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
