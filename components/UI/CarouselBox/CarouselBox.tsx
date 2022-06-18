import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";

interface Props {
  title: string;
  className: string;
  href: string;
  children?: React.ReactNode;
}
const CarouselBox: React.FC<Props> = ({ title, className, children, href }) => {
  const { t } = useLanguage();

  return (
    <div className="w-[85%] mx-auto flex bg-[#37bccef9] rounded-md">
      <div
        className={`flex flex-col items-center justify-around flex-grow text-sm sm:text-base  bg-cover bg-no-repeat bg-center rounded-md backdrop-blur-md ${className}`}
      >
        <h2 className="text-lg text-center sm:text-xl font-bold text-palette-primary">
          {t[`${title}`]}
        </h2>
        <Link href={`${href}`}>
          <a className="text-palette-primary/60 text-sm font-bold py-1 px-4 -mb-2 shadow-lg block rounded-full backdrop-filter backdrop-blur-[10px] bg-gray-300/10">
            {t.seeAll}
          </a>
        </Link>
      </div>
      <div className="w-[55%] sm:w-[75%] md:w-[85%]">{children}</div>
    </div>
  );
};

export default CarouselBox;
