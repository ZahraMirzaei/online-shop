import React from "react";
import ExtraMenu from "./ExtraMenu";
import MegaMenu from "./MegaMenu";

const index = () => {
  return (
    <div className="flex items-center grow">
      <MegaMenu />
      <ExtraMenu />
    </div>
  );
};

export default index;
