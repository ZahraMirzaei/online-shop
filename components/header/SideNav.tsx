import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";

interface Props {
  state?: string;
  onClose: () => void;
  children?: React.ReactNode;
  ref: React.HTMLProps<HTMLDivElement>;
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state, onClose }, ref) => {
  const { locale } = useRouter();
  return (
    <>
      <div
        ref={ref}
        className={`max-w-[380px] w-[80%] h-screen fixed top-0 shadow-md
      ${locale == "en" ? "left-0" : "right-0"} 
      z-[100] bg-palette-card origin-left overflow-hidden 
      ${locale == "en" ? "translate-x-[-100%]" : "translate-x-[100%]"}
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
          className={`absolute top-3 ltr:left-0 rtl:right-0 ltr:ml-[85%] rtl:mr-[85%]   text-4xl cursor-pointer z-[100] ${
            state === "entering"
              ? "animate-fadeCloseBtnEntering"
              : state === "entered"
              ? "opacity-100"
              : "animate-fadeCloseBtnExit"
          }`}
          onClick={onClose}
        >
          <IoClose />
        </div>
      </div>
    </>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
