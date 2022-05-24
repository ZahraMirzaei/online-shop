import React, { useState } from "react";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { Transition } from "react-transition-group";
import { IconType } from "react-icons/lib";

interface Props {
  dropDown: {
    title: string | IconType;
    url?: string;
    icon?: IconType;
    subtitles: string[];
  };
}
const DropDown: React.FC<Props> = ({ dropDown }) => {
  const [openDropdown, setOpenDropDown] = useState(false);
  let ArrowDirection = !openDropdown ? HiChevronDown : HiChevronUp;
  return (
    // h-0 and transition-all =>deleted
    <div className=" origin-top">
      <h3
        className="flex justify-start items-center cursor-pointer py-4 px-6 w-full"
        onClick={() => setOpenDropDown((prevState) => !prevState)}
      >
        {typeof dropDown.title === "string" ? (
          dropDown.title
        ) : (
          <dropDown.title />
        )}
        <ArrowDirection />
      </h3>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropdown}
        timeout={{ enter: 300, exit: 200 }}
      >
        {(state) => (
          <ul
            className={`
          ${
            state === "entering"
              ? "animate-dropDown"
              : state === "entered"
              ? "scale-y-100 opacity-100"
              : "animate-dropDownExit"
          }
          `}
          >
            {dropDown.subtitles.map((item) => {
              let itemKey = new Date().toLocaleString();
              return (
                <li key={itemKey}>
                  <Link href="/">
                    <a></a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Transition>
    </div>
  );
};

export default DropDown;
