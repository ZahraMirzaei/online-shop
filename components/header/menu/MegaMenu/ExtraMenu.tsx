import React from "react";
import Link from "next/link";
import { extraMenu } from "../../../../mock/menuItems";
import { useLanguage } from "../../../../hooks/useLanguage";

const ExtraMenu = () => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center ltr:border-l-2 rtl:border-r-2 border-gray-300 grow rtl:mx-5 ltr:ml-2">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-palette-mute dark:text-slate-300 mx-2"
            key={menuItem.title}
          >
            <menuItem.icon />
            <Link href="/">
              <a>{t[`${menuItem.title}`]}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
