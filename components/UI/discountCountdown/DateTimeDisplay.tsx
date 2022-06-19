import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";

interface Props {
  value: number;
  type: string;
  isDanger: boolean;
}
const DateTimeDisplay: React.FC<Props> = ({ value, type, isDanger }) => {
  const { t, locale } = useLanguage();
  const dateTime =
    locale === "en"
      ? new Intl.NumberFormat("en-EN").format(value)
      : new Intl.NumberFormat("fa-IR").format(value);
  return (
    <div
      className={`flex flex-col items-center mx-[2px] sm:mx-3 py-2 text-[11px] sm:text-sm md:text-base w-14 sm:w-20 backdrop-filter backdrop-blur-[8px] bg-palette-fill/50 shadow-lg rounded-lg ${
        isDanger ? "text-rose-600" : ""
      }`}
    >
      <p>{dateTime}</p>
      <span>{t[`${type}`]}</span>
    </div>
  );
};

export default DateTimeDisplay;
