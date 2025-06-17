"use client"

import { Button } from "@/components/ui/button";
import { Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    return(
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => 
            setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90
            dark:scale-0"></Sun>
            <SunMoon className="absolute h-10 w-10 rotate-0 scale-0 dark:-rotate-0
            dark:scale-100"></SunMoon>
        </Button>
    )
}