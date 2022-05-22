import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const Theme = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeChanger = () => {
    if (!mounted) return null;
    if (currentTheme === "dark") {
      return (
        <div role="button" onClick={() => setTheme("light")}>
          <BsFillBrightnessHighFill style={{ fontSize: "1.5rem" }} />
        </div>
      );
    } else {
      return (
        <div role="button" onClick={() => setTheme("dark")}>
          <BsFillMoonStarsFill style={{ fontSize: "1.3rem" }} />
        </div>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default Theme;
