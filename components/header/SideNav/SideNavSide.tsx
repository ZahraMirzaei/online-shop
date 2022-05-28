import React, { useRef, useContext } from "react";
import { Transition } from "react-transition-group";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import DropDown from "../../UI/DropDown";
import SidebarContext from "../../../store/NavContext";
import { useLanguage } from "../../../hooks/useLanguage";

const SideNavSide = () => {
  const sidebarCtx = useContext(SidebarContext);
  const nodeRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();
  const BackArrow =
    locale === "en" ? HiOutlineArrowSmLeft : HiOutlineArrowSmRight;

  return (
    <>
      {sidebarCtx.dropDownList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={sidebarCtx.isOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[80%] h-screen pb-4 fixed top-0 shadow-md z-[110]   bg-palette-card origin-left overflow-auto md:hidden
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
                  onClick={sidebarCtx.closeSidebar}
                >
                  <BackArrow style={{ fontSize: "1.5rem" }} />
                  <h3 className="ltr:ml-2 rtl:mr-2 py-1">{t.mainMenu}</h3>
                </div>
                <hr className="mb-6" />
                {sidebarCtx.dropDownList.map((item) => {
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
