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
          <FaMoon
            style={{
              fontSize: "1.1rem",
              filter: "drop-shadow(3px 3px 2px rgb(0 0 0 / 0.4))",
            }}
          />
        </div>
      );
    }
  };

  return <div className="rtl:ml-1 ltr:mr-1">{renderThemeChanger()}</div>;
};

export default Theme;
