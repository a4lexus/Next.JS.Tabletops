"use client";
import { Moon, Sun } from 'lucide-react';
import { MoonStar } from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
       {resolvedTheme === "dark" ? (
        <Sun className="hover:text-[#b96011]" />
      ) : (
        <Moon className="hover:text-[#b96011]" />
      )}
    </button>
  );
}