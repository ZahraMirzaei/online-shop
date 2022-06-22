import React, { useRef, useContext } from "react";
import { Transition } from "react-transition-group";
import { GoGrabber } from "react-icons/go";
import SidebarContext from "../../../store/context/NavContext";
import SideNav from "./SideNav";

const SideBar = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const sidebarCtx = useContext(SidebarContext);

  const closeNav = () => {
    sidebarCtx.closeNavbar();
    sidebarCtx.closeSidebar();
  };

  return (
    <div className="md:hidden">
      <div onClick={sidebarCtx.openNavbar}>
        <GoGrabber style={{ fontSize: "2rem" }} />
      </div>
      <Transition
        nodeRef={nodeRef}
        in={sidebarCtx.isNavbarOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeNav} />
              <div
                className={`fixed inset-0 z-50 bg-black/60
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
            </>
          );
        }}
      </Transition>
    </div>
  );
};

export default SideBar;
