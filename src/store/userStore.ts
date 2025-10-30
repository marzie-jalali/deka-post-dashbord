import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (newName: string) => void;
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
  language: string;
  setLanguage: (language: "fa" | "en") => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: "Nura",
      setUsername: (newName) => set({ username: newName }),
      theme: "light",
      setTheme: (theme) => set({ theme }),
      language: "en",
      setLanguage: (language) => set({ language }),
    }),
    { name: "user-store" }
  )
);

export default useUserStore;
