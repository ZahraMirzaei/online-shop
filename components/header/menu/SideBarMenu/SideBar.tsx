import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "../../../../store/sideNavBar-slice";
import { Transition } from "react-transition-group";
import { GoGrabber } from "react-icons/go";
import { ISideNavBarRootState } from "../../../../lib/types/sidebar";
import SideNav from "./SideNav";

const SideBar = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNavbarOpen
  );
  const closeNav = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const openNavBar = () => {
    dispatch(sideNavBarActions.openNavbar());
  };

  return (
    <div className="md:hidden">
      <div onClick={openNavBar}>
        <GoGrabber style={{ fontSize: "2rem" }} />
      </div>
      <Transition
        nodeRef={nodeRef}
        in={isNavbarOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeNav} />
              <div
                className={`fixed inset-0 z-[999] bg-black/60
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
