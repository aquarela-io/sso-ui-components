"use client";
import React, { ReactElement, useState, useEffect } from "react";

export const IconContainer: React.FC<{
  size?: string | null;
  children: ReactElement<HTMLDivElement>;
}> = ({ children, size }) => (
  <div className={`${size !== "icon" && " absolute"} left-12 max-h-[50px] `}>
    {children}
  </div>
);

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const initialDarkMode =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(initialDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const handleClassChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
}
