import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Theme from "./Theme";
import Language from "./language/Language";

const Settings = () => {
  return (
    <div className="relative flex justify-between items-center z-[150]">
      <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
      <div className="absolute top-full ltr:right-0 rtl:left-0 bg-palette-card shadow-md rounded-lg px-3 py-3 ">
        <Language />
        <hr />
        <Theme />
      </div>
    </div>
  );
};

export default Settings;
