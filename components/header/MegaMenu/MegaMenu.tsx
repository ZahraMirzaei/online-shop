import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { GoGrabber } from "react-icons/go";
const MegaMenu = () => {
  const { t, locale } = useLanguage();
  return (
    <div>
      <div className="flex items-center">
        <GoGrabber style={{ fontSize: "2rem" }} />
        <h3 className="ltr:ml-1 rtl:mr-1">{t.CategoryOfGoods}</h3>
      </div>
    </div>
  );
};

export default MegaMenu;
