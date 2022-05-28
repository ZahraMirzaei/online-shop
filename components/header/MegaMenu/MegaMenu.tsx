import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useLanguage } from "../../../hooks/useLanguage";
import { GoGrabber } from "react-icons/go";
import Menu from "./Menu";

const MegaMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const openNav = () => {
    setIsOpenMenu(true);
  };

  const closeNav = () => {
    setIsOpenMenu(false);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseOver={openNav}
      onMouseOut={closeNav}
    >
      <div className="flex items-center font-bold cursor-pointer">
        <GoGrabber style={{ fontSize: "2rem" }} />
        <h3 className="ltr:ml-1 rtl:mr-1">{t.CategoryOfGoods}</h3>
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isOpenMenu}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={nodeRef} className=" z-[100]">
              <div
                className={`fixed top-[6.2rem] inset-0 bg-gray-600/60
                ${
                  state === "entering"
                    ? "animate-fadeEntering"
                    : state === "entered"
                    ? "opacity-100"
                    : "animate-fadeExit"
                }
                `}
                onClick={closeNav}
              ></div>
              <div className="absolute top-full ltr:left-0 rtl:right-0 bg-palette-card z-[110] shadow-md">
                <Menu />
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default MegaMenu;
