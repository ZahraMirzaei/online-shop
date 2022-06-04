import React from "react";

interface Props {
  className?: string;
  style?: any;
  onClick?: () => void;
}
export const NextArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-10 lg:w-28 h-full pt-10 !flex items-center justify-center ltr:left-auto ltr:right-0 rtl:right-auto rtl:left-0 before:text-[20px] lg:before:text-[30px] before:content-['→'] hover:bg-palette-card/10`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export const PrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-10 lg:w-28 h-full pt-10 !flex items-center justify-center ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto before:text-[20px] lg:before:text-[30px] before:content-['←'] hover:bg-palette-card/10`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
