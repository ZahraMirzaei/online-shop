import React from "react";

interface Props {
  className?: string;
  style?: any;
  onClick?: () => void;
}
export const NextArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center ltr:left-auto ltr:-right-2 rtl:right-auto rtl:-left-2 before:text-[20px] lg:before:text-[40px] before:content-['→'] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export const PrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center ltr:-left-5 ltr:right-auto rtl:-right-5 rtl:left-auto before:text-[20px] lg:before:text-[40px] before:content-['←'] hover:bg-palette-card/20 drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
