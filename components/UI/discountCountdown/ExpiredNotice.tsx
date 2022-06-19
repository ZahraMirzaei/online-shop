import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";

const ExpiredNotice = () => {
  const { t } = useLanguage();
  return (
    <div>
      <p className="text-md text-palette-mute">{t.expireDiscount}</p>
    </div>
  );
};

export default ExpiredNotice;
