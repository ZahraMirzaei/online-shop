import React from "react";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  ID?: number;
  title: string;
  description: string;
  bgImg: string;
  url: string;
}
const Slide: React.FC<Props> = ({ title, description, bgImg, url }) => {
  const { t } = useLanguage();

  return (
    <>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `${bgImg}` }}
      >
        <Link href={url}>
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[12px] bg-palette-card/60 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t[`${title}`]}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t[`${description}`]}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Slide;
