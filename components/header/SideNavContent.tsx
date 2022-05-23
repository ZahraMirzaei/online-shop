import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import megaMenu from "../../mock/mega_menu";
// import
import en from "../../locales/en";
import fa from "../../locales/fa";
const SideNavContent = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return (
    <div className="absolute w-full h-full overflow-y-auto">
      {megaMenu.map((item) => {
        return (
          <div key={item.category}>
            {/* <Link href='/'  */}
            <div>{t[item.category]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavContent;
