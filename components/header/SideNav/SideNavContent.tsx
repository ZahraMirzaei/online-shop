import React, { useContext } from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import menuItems from "../../../mock/menuItems";
import { extraMenu } from "../../../mock/menuItems";
import SidebarContext from "../../../store/NavContext";
import { IDropDown } from "../../../lib/interface/dropDown";

const SideNavContent = () => {
  const { t, locale } = useLanguage();
  const sideNavCtx = useContext(SidebarContext);
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;
  const openNav = (sidebarSideContent: IDropDown[] = []) => {
    sideNavCtx.setDropDownList(sidebarSideContent);
    sideNavCtx.openSidebar();
  };
  return (
    <div className="absolute w-full h-full overflow-y-auto">
      <div className="flex flex-col  mt-3 pt-3  ltr:px-5 rtl:px-5  cursor-pointer">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center  py-3 text-palette-mute "
              key={menuItem.title}
            >
              <menuItem.icon />
              <Link href="/">
                <a className=" mx-4">{t[`${menuItem.title}`]}</a>
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-semibold text-lg py-3 ltr:px-5 rtl:px-5">
        {t.CategoryOfGoods}
      </h2>
      {menuItems.map((item) => {
        return (
          <div key={item.category}>
            <div
              className="flex items-center mt-3 py-3 ltr:px-5 rtl:px-5  cursor-pointer  hover:ltr:md:translate-x-2 hover:rtl:md:-translate-x-2 transition-transform"
              onClick={() => openNav(item.productsGroup)}
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
                <ArrowDirection style={{ fontSize: "1.5rem" }} />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavContent;
