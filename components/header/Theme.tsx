import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import { FaCloudMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
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
          <BsFillBrightnessHighFill style={{ fontSize: "1.3rem" }} />
        </div>
      );
    } else {
      return (
        <div role="button" onClick={() => setTheme("dark")}>
          <FaMoon style={{ fontSize: "1.1rem" }} />
        </div>
      );
    }
  };

  return renderThemeChanger();
};

export default Theme;
