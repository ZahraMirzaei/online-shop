import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { useLanguage } from "../../../hooks/useLanguage";
import ThemeItem from "./ThemeItem";
const Theme = () => {
  // const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeChanger = () => {
    // if (!mounted) return null;
    if (currentTheme === "dark") {
      return <ThemeItem theme="light" Icon={MdOutlineLightMode} />;
    } else {
      return <ThemeItem theme="dark" Icon={BiMoon} />;
    }
  };

  return (
    <div className="md:rtl:ml-1 md:ltr:ml-1 p-1">
      <div className="md:hidden">
        <h3>{t.theme}</h3>
        <div className="mt-2 ml-1 z-10">
          <ThemeItem
            theme="light"
            Icon={MdOutlineLightMode}
            currentTheme={currentTheme}
          />
          <ThemeItem theme="dark" Icon={BiMoon} currentTheme={currentTheme} />
        </div>
      </div>
      <div className="hidden md:block">{renderThemeChanger()}</div>
    </div>
  );
};

export default Theme;
