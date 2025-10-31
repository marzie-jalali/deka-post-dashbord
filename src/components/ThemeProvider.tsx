import type { ReactNode } from "react";
import { useEffect } from "react";
import useUserStore from "../store/userStore";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useUserStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === "dark") {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
}
