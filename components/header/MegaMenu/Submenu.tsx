import React, { useContext } from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { IDropDown } from "../../../lib/types/dropDown";
import ActiveMenuItemContext from "../../../store/context/activeMenuItemContext";
import MegaMenuContext from "../../../store/context/megaMenuContext";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/router";

interface Props {
  subMenu: IDropDown[] | undefined;
}
const Submenu: React.FC<Props> = ({ subMenu }) => {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const activeItemCtx = useContext(ActiveMenuItemContext);
  const megaMenuCtx = useContext(MegaMenuContext);
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;

  return (
    <div className="flex flex-col px-6 py-5 w-full">
      <div className="flex items-center hover:text-palette-primary transition-color duration-300">
        {subMenu ? (
          <>
            <Link href={`/${activeItemCtx.activeMenuItemText}`}>
              <a className="block rtl:ml-4 lrt:mr-4 text-[16px] ">
                <div onClick={megaMenuCtx.closeMegaMenu}>{t.seeAllProduct}</div>
              </a>
            </Link>
            <ArrowDirection style={{ fontSize: "1rem", color: "inherit" }} />
          </>
        ) : null}
      </div>
      <br />
      <div className="relative grow md:columns-[188px] xl:columns-3 xl:max-w-4xl    ">
        {subMenu ? (
          <>
            {subMenu.map((menuTitle, index) => {
              return (
                <div className="py-3" key={`${menuTitle}-${index}`}>
                  <Link
                    href={`/${activeItemCtx.activeMenuItemText}/${menuTitle.title}`}
                  >
                    <a className="block text-sm rtl:ml-10 ltr:mr-10 font-bold px-2 ltr:border-l-4 rtl:border-r-4 border-palette-primary rounded-sm hover:text-palette-primary transition-color duration-300">
                      <div onClick={megaMenuCtx.closeMegaMenu}>
                        {t[`${menuTitle.title}`]}
                      </div>
                    </a>
                  </Link>
                  {menuTitle.subtitles.map((subTitle, index) => {
                    return (
                      <div key={`${subTitle}-${index}`}>
                        <Link
                          href={`/${activeItemCtx.activeMenuItemText}/${menuTitle.title}/${subTitle}`}
                        >
                          <a className="block py-2 hover:text-palette-primary transition-color duration-200">
                            <div onClick={megaMenuCtx.closeMegaMenu}>
                              {t[`${subTitle}`]}
                            </div>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <p className="text-sm text-palette-mute absolute top-[45%] ltr:left-[30%] rtl:right-[30%]">
            {t.noProduct}
          </p>
        )}
      </div>
    </div>
  );
};

export default Submenu;
