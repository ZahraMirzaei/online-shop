import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Transition } from "react-transition-group";
import en from "../../locales/pages/home/en";
import fa from "../../locales/pages/home/fa";
import SearchBar from "./SearchBar";
import { GoGrabber } from "react-icons/go";

import { HiOutlineLogin } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Theme from "./Theme";
import Language from "./Language";
import SideNav from "./SideNav/SideNav";
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
    <div className="pt-4">
      <div>
        <div className="flex justify-between mb-2">
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
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="zishop-logo"
              width={120}
              height={25}
              objectFit="contain"
              className="cursor-pointer ltr:-mr-3"
            />
          </Link>
          <div className="flex justify-between items-center w-16">
            <Theme />
            <Language />
          </div>
        </div>
        <hr />
        <div className="my-2 flex items-center">
          <SearchBar />
          <div className="ltr:ml-4 rtl:mr-4 flex items-center justify-between ltr:w-[4.1rem] rtl:w-[4.3rem] text-[1.6rem] font-bold">
            <HiOutlineLogin />
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
