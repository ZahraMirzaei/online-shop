import React from "react";
import Favorites from "../components/favorite";
import Breadcrumb from "../components/UI/Breadcrumb";

const favorite = () => {
  return (
    <div>
      <Breadcrumb />
      <Favorites />
    </div>
  );
};

export default favorite;
