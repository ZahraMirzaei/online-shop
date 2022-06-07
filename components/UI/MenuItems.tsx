import React, { useContext } from "react";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import menuItems from "../../mock/menuItems";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { IDropDown } from "../../lib/interface/dropDown";
import ActiveMenuItemContext from "../../store/activeMenuItemContext";

interface Props {
  onClick?: (submenu: IDropDown[] | undefined) => void;
  onMouseOver?: (submenu: IDropDown[] | undefined, index: number) => void;
}
const MenuItems: React.FC<Props> = (props) => {
  const { t, locale } = useLanguage();
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;
  const activeItemCtx = useContext(ActiveMenuItemContext);
  return (
    <ul className="rounded-lg">
      {menuItems.map((item, index) => {
        return (
          <li
            className="py-3 md:py-3 transition-all hover:text-palette-primary font-bold"
            key={item.category}
          >
            <Link href="/">
              <a
                className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                  index === activeItemCtx.activeMenuItemIndex
                    ? "md:text-palette-primary"
                    : ""
                }`}
                onClick={() => props.onClick?.(item.productsGroup)}
                onMouseOver={() =>
                  props.onMouseOver?.(item.productsGroup, index)
                }
              >
                <item.icon className="w-6 h-6 " />
                <div
                  className={`mx-4 grow ${
                    !item.productsGroup ? "text-gray-400 font-normal" : ""
                  }`}
                >
                  {t[item.category]}
                </div>
                {item.productsGroup ? (
                  <ArrowDirection style={{ fontSize: "1rem" }} />
                ) : null}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
