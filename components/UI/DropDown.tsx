import React, { useState, forwardRef, useRef } from "react";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useRouter } from "next/router";
import { Transition } from "react-transition-group";

import { IDropDown } from "../../lib/interface/dropDown";
import en from "../../locales/en";
import fa from "../../locales/fa";

interface Props {
  dropDown: IDropDown;
  ref: React.HTMLProps<HTMLDivElement>;
}
const DropDown = forwardRef<HTMLDivElement, Props>(({ dropDown }, ref) => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  let ArrowDirection = !openDropdown ? HiChevronDown : HiChevronUp;
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="origin-top" ref={ref}>
      <div
        className="flex items-center cursor-pointer py-4 px-6"
        onClick={() => setOpenDropDown((prevState) => !prevState)}
      >
        <h3 className="ltr:mr-3 rtl:ml-3 font-bold">
          {t[`${dropDown.title}`]}
        </h3>
        <ArrowDirection />
      </div>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropdown}
        timeout={{ enter: 300, exit: 200 }}
        nodeRef={nodeRef}
      >
        {(state) => (
          <>
            <div
              className={`
          ${
            state === "entering"
              ? `animate-dropDown`
              : state === "entered"
              ? "scale-y-100 opacity-100"
              : "animate-dropDownExit"
          }
          `}
            >
              {dropDown.subtitles.map((item, index) => {
                return (
                  <div
                    className="ltr:ml-10 rtl:mr-10 py-3"
                    ref={ref}
                    key={`${item}-${index}`}
                  >
                    <Link href="/">
                      <a>{t[`${item}`]}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </Transition>
    </div>
  );
});

DropDown.displayName = "DropDown";
export default DropDown;
