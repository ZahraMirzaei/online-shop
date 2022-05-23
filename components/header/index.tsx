import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Transition } from "react-transition-group";
import en from "../../locales/pages/home/en";
import fa from "../../locales/pages/home/fa";
import SearchBar from "./SearchBar";
import { GoGrabber } from "react-icons/go";

import Theme from "./Theme";
import Language from "./Language";
import SideNav from "./SideNav";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;

  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className=" pt-4">
      <div>
        <div className="flex justify-between">
          <div onClick={openNav}>
            <GoGrabber style={{ fontSize: "2.5rem" }} />
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
          <Link href="/">
            <h1>
              <Image
                src="/images/logo.png"
                alt="zishop-logo"
                width={150}
                height={35}
              />
            </h1>
          </Link>
          <div className="flex justify-between items-center w-16  ">
            <Theme />
            <Language />
          </div>
        </div>
        <hr />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
