"use client";
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const handleClassChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Observe changes to the HTML element's class list
    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
}
