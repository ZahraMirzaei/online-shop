import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { GoGrabber } from "react-icons/go";
import SideNav from "./SideNav";

const SideBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <div className="md:hidden">
      <div onClick={openNav}>
        <GoGrabber style={{ fontSize: "2rem" }} />
      </div>
      <Transition
        nodeRef={nodeRef}
        in={navOpen}
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
