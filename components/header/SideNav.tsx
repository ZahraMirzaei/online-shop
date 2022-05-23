import React, { forwardRef } from "react";
import { useRouter } from "next/router";

interface Props {
  state?: string;
  children?: React.ReactNode;
  ref: React.HTMLProps<HTMLDivElement>;
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state }, ref) => {
  const { locale } = useRouter();
  return (
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
      test
    </div>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
