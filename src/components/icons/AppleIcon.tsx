"use client";

import { useState, useEffect } from "react";

/**
 * Copyright © Apple Inc. All rights reserved.
 * This icon is the property of Apple Inc. and is protected by copyright laws.
 * Unauthorized use or reproduction is strictly prohibited.
 */

export const AppleIcon = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-mode") === "dark";
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-mode"],
    });
  }, [isDarkMode]);

  return (
    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <symbol
          width="33"
          height="33"
          viewBox="0 0 40 40"
          fill="none"
          id="apple-icon"
        >
          <path
            d="M20.6066 11.384C22.0506 11.384 23.86 10.408 24.94 9.10667C25.916 7.92667 26.628 6.27867 26.628 4.63067C26.628 4.40667 26.608 4.18267 26.5666 4C24.96 4.06133 23.0266 5.07867 21.868 6.44C20.952 7.47867 20.1173 9.10667 20.1173 10.7733C20.1173 11.0187 20.1586 11.2627 20.1786 11.344C20.2813 11.364 20.4453 11.384 20.6066 11.384ZM15.5199 36C17.4933 36 18.368 34.6773 20.8306 34.6773C23.332 34.6773 23.8813 35.9587 26.0786 35.9587C28.2346 35.9587 29.6786 33.9653 31.0426 32.012C32.568 29.7747 33.1986 27.5773 33.24 27.476C33.0973 27.436 28.9666 25.7467 28.9666 21.0067C28.9666 16.8973 32.2226 15.0467 32.4053 14.904C30.2493 11.8107 26.9733 11.7307 26.0786 11.7307C23.6573 11.7307 21.684 13.1947 20.444 13.1947C19.1013 13.1947 17.3306 11.812 15.236 11.812C11.2493 11.812 7.19995 15.108 7.19995 21.332C7.19995 25.1987 8.70662 29.2867 10.556 31.932C12.1426 34.1693 13.5266 36 15.5199 36Z"
            fill={isDarkMode ? "black" : "white"}
          />
        </symbol>
      </defs>
      <use href="#apple-icon" x="0" y="0" width="30" height="100%" />
    </svg>
  );
};
