import Link from "next/link";
import React from "react";
import { footerContent } from "../../../mock/footer";
import { useLanguage } from "../../../hooks/useLanguage";

const FooterColumns = () => {
  const { t } = useLanguage();
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] xl:rtl:pl-60">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 sm:mt-0" key={item.title}>
            <h4 className="text-md rtl:border-r-4 ltr:border-l-4 border-palette-primary px-2">
              {t[item.title]}
            </h4>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link href={subItem.href} key={subItem.text}>
                    <a className="text-sm text-palette-base/70 px-4 py-2 hover:text-palette-base/100">
                      {t[subItem.text]}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
