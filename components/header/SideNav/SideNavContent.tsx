import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import megaMenu from "../../../mock/mega_menu";
import en from "../../../locales/en";
import fa from "../../../locales/fa";

const SideNavContent = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return (
    <div className="absolute w-full h-full overflow-y-auto">
      {megaMenu.map((item) => {
        return (
          <div key={item.category}>
            <div className="flex items-center mt-3 py-3 ltr:pl-5 rtl:pr-5  cursor-pointer font-semibold hover:ltr:translate-x-2 hover:rtl:-translate-x-2 transition-transform">
              <item.icon className="w-6 h-6 " />
              <div className="mx-4">{t[item.category]}</div>
              {locale === "en" ? <HiChevronRight /> : <HiChevronLeft />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavContent;
