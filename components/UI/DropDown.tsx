import React, { useState, forwardRef, useRef } from "react";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { Transition } from "react-transition-group";

import { IDropDown } from "../../lib/types/dropDown";
import { useDispatch } from "react-redux";
import { sideNavBarActions } from "../../store/sideNavBar-slice";
import { useSelector } from "react-redux";
import { IActiveMenuItemRootState } from "../../lib/types/activeMenuItem";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  dropDown: IDropDown;
  ref: React.HTMLProps<HTMLDivElement>;
}
const DropDown = forwardRef<HTMLDivElement, Props>(({ dropDown }, ref) => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { t } = useLanguage();
  let ArrowDirection = !openDropdown ? HiChevronDown : HiChevronUp;

  const activeMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

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
                      href={`/${activeMenuItemText}/${dropDown.title}/${item}`}
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
