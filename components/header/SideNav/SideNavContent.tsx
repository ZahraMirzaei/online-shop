import React, { useContext } from "react";
import { useRouter } from "next/router";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import megaMenu from "../../../mock/mega_menu";
import SidebarContext from "../../../store/NavContext";
import en from "../../../locales/en";
import fa from "../../../locales/fa";
import { IDropDown } from "../../../lib/interface/dropDown";

const SideNavContent = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  const sideNavCtx = useContext(SidebarContext);
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;
  const openNav = (sidebarSideContent: IDropDown[] = []) => {
    sideNavCtx.setDropDownList(sidebarSideContent);
    sideNavCtx.openSidebar();
  };
  return (
    <div className="absolute w-full h-full overflow-y-auto">
      {megaMenu.map((item) => {
        return (
          <div key={item.category}>
            <div
              className="flex items-center mt-3 py-3 ltr:px-5 rtl:px-5  cursor-pointer font-semibold hover:ltr:md:translate-x-2 hover:rtl:md:-translate-x-2 transition-transform"
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
