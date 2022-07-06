import React from "react";
import ExtraMenu from "./ExtraMenu";
import MegaMenu from "./MegaMenu";

const index = () => {
  return (
    <div className="hidden md:flex items-center flex-grow">
      <MegaMenu />
      <ExtraMenu />
    </div>
  );
};

export default index;
