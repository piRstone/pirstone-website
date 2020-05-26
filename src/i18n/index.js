import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const navLng = navigator.language ? navigator.language.split('-')[0] : undefined;
const lng = localStorage.getItem('language') || navLng || 'fr';

i18n.use(initReactI18next).init({
  lng,
  resources: {
    fr: {
      home: require('../containers/Home/i18n/fr.json'),
    },
    en: {
      home: require('../containers/Home/i18n/en.json'),
    }
  }
});
