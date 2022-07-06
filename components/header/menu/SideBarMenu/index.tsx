import React from "react";
import SideBar from "./SideBar";
import SideNavSide from "./SideNavSide";

const index = () => {
  return (
    <div className="md:hidden">
      <SideBar />
      <SideNavSide />
    </div>
  );
};

export default index;
