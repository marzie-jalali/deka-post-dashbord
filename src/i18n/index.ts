import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sidebar: {
          dashboard: "Dashboard",
          todos: "Todos",
          weather: "Weather",
          profile: "Profile",
        },
        dashboard: {
          goodMorning: "Good Morning",
          goodAfternoon: "Good Afternoon",
          goodEvening: "Good Evening",
          welcome: "Welcome!",
          firstVisit:
            "for the first time you are using the dashboard, add your username and enjoy it.",
        },
        profile: {
          username: "Username",
          theme: "Theme",
          light: "Light",
          dark: "Dark",
          system: "System",
          en: "English",
          fa: "Persian",
          save: "Save",
        },
        weather: {
          windspeed: "Wind Speed",
          selectCity: "Select a city",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
