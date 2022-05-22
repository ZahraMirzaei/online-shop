import React from "react";
import { useRouter } from "next/router";
const SideNav = () => {
  const { locale } = useRouter();
  return (
    <div
      className={`max-w-[380px] w-[80%] h-screen fixed top-0 ${
        locale == "en" ? "left-0" : "right-0"
      } z-[100] bg-palette-card origin-left overflow-hidden ${
        locale == "en" ? "translate-x-[-100%]" : "translate-x-[100%]"
      }`}
    ></div>
  );
};

export default SideNav;
