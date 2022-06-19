import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { IDropDown } from "../../../lib/types/dropDown";

interface Props {
  subMenu: IDropDown[] | undefined;
}
const Submenu: React.FC<Props> = ({ subMenu }) => {
  const { t } = useLanguage();
  return (
    <div className="relative grow md:columns-[188px] xl:columns-3 xl:max-w-4xl  px-6 py-5  ">
      {subMenu ? (
        subMenu.map((item, index) => {
          return (
            <div className="py-3" key={`${item}-${index}`}>
              <Link href="/">
                <a className="block text-sm rtl:ml-10 ltr:mr-10 font-bold px-2 ltr:border-l-4 rtl:border-r-4 border-palette-primary rounded-sm hover:text-palette-primary">
                  {t[`${item.title}`]}
                </a>
              </Link>
              {item.subtitles.map((item, index) => {
                return (
                  <div key={`${item}-${index}`}>
                    <Link href="/">
                      <a className="block py-2 hover:text-palette-primary">
                        {t[`${item}`]}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <p className="text-sm text-palette-mute absolute top-[45%] ltr:left-[30%] rtl:right-[30%]">
          {t.noProduct}
        </p>
      )}
    </div>
  );
};

export default Submenu;
