"use client";
import { createContext, useContext, type ReactNode } from "react";
import { useFontSize } from "../../hook/fontsize";

const FontSizeContext = createContext<any>(null);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const fontSizeHook = useFontSize();
  return (
    <FontSizeContext.Provider value={fontSizeHook}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSizeContext() {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error("useFontSizeContext must be used inside FontSizeProvider");
  return ctx;
}
