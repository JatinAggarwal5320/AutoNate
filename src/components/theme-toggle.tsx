"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="size-8" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="size-4 text-amber-500 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <MoonIcon className="size-4 text-slate-700 dark:text-slate-400 transition-transform duration-300 hover:-rotate-12" />
      )}
    </Button>
  );
}
