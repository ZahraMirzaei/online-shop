import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "../../store/megaMenu-slice";
import { useLanguage } from "../../hooks/useLanguage";
import menuItems from "../../mock/menuItems";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { IDropDown } from "../../lib/types/dropDown";
import { useRouter } from "next/router";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { IActiveMenuItemRootState } from "../../lib/types/activeMenuItem";

interface Props {
  onClick?: (submenu: IDropDown[] | undefined, activeItemName: string) => void;
  onMouseOver?: (
    submenu: IDropDown[] | undefined,
    index: number,
    activeItemName: string
  ) => void;
}

const MenuItems: React.FC<Props> = (props) => {
  const { t, locale } = useLanguage();
  const route = useRouter();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;

  const activeMenuItemIndex = useSelector(
    (state: IActiveMenuItemRootState) =>
      state.activeMenuItem.activeMenuItemIndex
  );
  return (
    <ul className="rounded-lg">
      {menuItems.map((item, index) => {
        return (
          <li
            className="py-3 md:py-3 transition-color duration-300 hover:text-palette-primary font-bold"
            key={item.category}
          >
            <Link href={width >= 768 ? `/${item.category}` : route.asPath}>
              <a
                className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                  index === activeMenuItemIndex ? "md:text-palette-primary" : ""
                }`}
                onClick={() => {
                  props.onClick?.(item.productsGroup, item.category);
                  width >= 768 && dispatch(megaMenuActions.closeMegaMenu());
                }}
                onMouseOver={() =>
                  props.onMouseOver?.(item.productsGroup, index, item.category)
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
