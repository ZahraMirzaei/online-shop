import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import menuItems from "../../../mock/menuItems";
const Menu = () => {
  const { t } = useLanguage();
  return (
    <nav>
      <ul>
        {menuItems.map((catItem) => {
          return (
            <li key={catItem.category}>
              <Link href="/">
                <a>{t[`${catItem.category}`]}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
