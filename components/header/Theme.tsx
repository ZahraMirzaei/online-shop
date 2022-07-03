import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
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
          <BsFillBrightnessHighFill
            style={{
              fontSize: "1.3rem",
              filter: "drop-shadow(0px 0px 5px rgb(255 255 255 / 0.6))",
            }}
          />
        </div>
      );
    } else {
      return (
        <div role="button" onClick={() => setTheme("dark")}>
          <RiMoonFill
            style={{
              fontSize: "1.3rem",
              filter: "drop-shadow(0px 1px 2px rgb(0 0 0 / 0.3))",
              color: "#0f172a",
            }}
          />
        </div>
      );
    }
  };

  return <div className="rtl:ml-1 ltr:ml-1 p-1">{renderThemeChanger()}</div>;
};

export default Theme;
