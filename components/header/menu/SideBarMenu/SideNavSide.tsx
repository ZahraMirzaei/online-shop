import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import {
  HiOutlineArrowSmRight,
  HiOutlineArrowSmLeft,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import DropDown from "../../../UI/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "../../../../store/sideNavBar-slice";
import { ISideNavBarRootState } from "../../../../lib/types/sidebar";
import { useLanguage } from "../../../../hooks/useLanguage";
import Link from "next/link";
import { IActiveMenuItemRootState } from "../../../../lib/types/activeMenuItem";

const SideNavSide = () => {
  const dispatch = useDispatch();

  const dropDownList = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.dropDownList
  );

  const isSidebarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isSidebarOpen
  );

  const activeMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  const closeSidebar = () => {
    dispatch(sideNavBarActions.closeSidebar());
  };

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const nodeRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();

  const BackArrow =
    locale === "en" ? HiOutlineArrowSmLeft : HiOutlineArrowSmRight;

  return (
    <>
      {dropDownList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={isSidebarOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[80%] h-screen pb-4 fixed top-0 shadow-md z-[1010]   bg-palette-card origin-left overflow-auto md:hidden
                ${locale == "en" ? "left-0" : "right-0"} 
                
                ${
                  state === "entering"
                    ? "ltr:animate-sidenavLTREntering rtl:animate-sidenavRTLEntering"
                    : state === "entered"
                    ? "translate-x-0"
                    : "ltr:animate-sidenavLTRExit rtl:animate-sidenavRTLExit"
                }
                `}
              >
                <div
                  className="flex items-center pt-4 pb-3 px-6 font-bold text-lg cursor-pointer"
                  onClick={closeSidebar}
                >
                  <BackArrow style={{ fontSize: "1.5rem" }} />
                  <h3 className="ltr:ml-2 rtl:mr-2 py-1">{t.mainMenu}</h3>
                </div>

                <hr className="mb-6" />

                <div className="flex items-center justify-between ltr:pr-6 rtl:pl-6 pb-6 mb-3 border-b-2 border-slate-400-600">
                  <Link href={`/${activeMenuItemText}`}>
                    <a>
                      <div className="font-bold mx-6" onClick={closeNavbar}>
                        {t.seeAllProduct}
                      </div>
                    </a>
                  </Link>
                  {locale === "en" ? (
                    <HiChevronRight style={{ fontSize: "1.5rem" }} />
                  ) : (
                    <HiChevronLeft style={{ fontSize: "1.5rem" }} />
                  )}
                </div>
                {dropDownList.map((item) => {
                  return (
                    <div key={item.title}>
                      <DropDown dropDown={item} />
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Transition>
      ) : null}
    </>
  );
};

SideNavSide.displayName = "SideNavSide";
export default SideNavSide;
