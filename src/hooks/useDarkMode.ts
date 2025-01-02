import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Initialize from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // If this hook runs in a server-side rendered environment, default to light mode.
    // Eventually this'll have to be fixed since it'll break dark mode functionality
    // across the app and prevent the user's selection from being persisted.
    return false;
  });

  // Update class and localStorage when state changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return [isDark, setIsDark] as const;
}
