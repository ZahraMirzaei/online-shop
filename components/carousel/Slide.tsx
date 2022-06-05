import React from "react";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { sliderContent } from "../../mock/slider";
import { ISlider } from "../../lib/interface/slider";

const Slide = () => {
  const { t } = useLanguage();

  return (
    <>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-digitalBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.digitalBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.digitalBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-stationeryBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.stationeryBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.stationeryBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-toyBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.toyBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.toyBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-houseBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.houseBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.houseBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-fashionBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.fashionBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.fashionBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-beautyBG bg-center bg-no-repeat`}
      >
        <Link href="/">
          <a className="block">
            <div
              className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
                {t.beautyBT}
              </h3>
              <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
                {t.beautyBD}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Slide;
