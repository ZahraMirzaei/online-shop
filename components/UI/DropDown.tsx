import React, { useState, forwardRef, useRef, useContext } from "react";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useRouter } from "next/router";
import { Transition } from "react-transition-group";

import ActiveMenuItemContext from "../../store/context/activeMenuItemContext";
import { IDropDown } from "../../lib/types/dropDown";
import en from "../../locales/en";
import fa from "../../locales/fa";
import { useDispatch } from "react-redux";
import { sideNavBarActions } from "../../store/sideNavBar-slice";

interface Props {
  dropDown: IDropDown;
  ref: React.HTMLProps<HTMLDivElement>;
}
const DropDown = forwardRef<HTMLDivElement, Props>(({ dropDown }, ref) => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const activeItemCtx = useContext(ActiveMenuItemContext);
  const dispatch = useDispatch();
  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };
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
        <h3 className="ltr:mr-3 rtl:ml-3 text-md font-bold grow">
          {t[`${dropDown.title}`]}
        </h3>
        <ArrowDirection style={{ fontSize: "1.5rem" }} />
      </div>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropdown}
        timeout={300}
        nodeRef={nodeRef}
      >
        {(state) => (
          <>
            <div
              ref={nodeRef}
              className={`origin-top rtl:mr-8 ltr:ml-8 px-2 rtl:border-r-4 ltr:border-l-4 border-slate-400
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
                    className="ltr:pl-6 rtl:pr-6 py-3"
                    ref={ref}
                    key={`${item}-${index}`}
                  >
                    <Link
                      href={`/${activeItemCtx.activeMenuItemText}/${dropDown.title}/${item}`}
                    >
                      <a>
                        <div onClick={closeNavbar}>{t[`${item}`]}</div>
                      </a>
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
