import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function useCurrentTime() {
  const [time, setTime] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();

  const getGreeting = () => {
    if (hours < 12) return t("dashboard.goodMorning");
    if (hours < 18) return t("dashboard.goodAfternoon");
    return t("dashboard.goodEvening");
  };

  return { time, getGreeting };
}
