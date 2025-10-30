import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const useFirstVisit = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      const isFirstVisit = localStorage.getItem("isFirstVisit");
      if (!isFirstVisit) {
        toast.success(t("dashboard.welcome"), {
          description: t("dashboard.firstVisit"),
          duration: Infinity,
          closeButton: true,
          action: {
            label: "Dismiss",
            onClick: () => toast.dismiss(),
          },
        });
        localStorage.setItem("isFirstVisit", "true");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};

export default useFirstVisit;
