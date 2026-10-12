"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#171715" : "#fafaf7");

    try {
      localStorage.setItem("render-theme", theme);
    } catch (error) {
      console.warn("Render could not save the color theme preference.", error);
    }
  }

  return (
    <button
      id="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
      className="press grid h-10 w-10 place-items-center rounded-full text-muted transition-[background-color,color,scale] hover:bg-well hover:text-ink"
    >
      <Moon className="theme-icon-light h-4 w-4" aria-hidden="true" />
      <Sun className="theme-icon-dark h-4 w-4" aria-hidden="true" />
    </button>
  );
}
