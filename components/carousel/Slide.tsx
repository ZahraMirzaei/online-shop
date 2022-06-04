import React from "react";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { ISlider } from "../../lib/interface/slider";

interface Props {
  sliderItem: ISlider;
}
const Slide: React.FC<Props> = (props) => {
  const { t } = useLanguage();
  const { title, description, imgSrc, url, classes } = props.sliderItem;

  return (
    <div>
      <Link href={url}>
        <a className="block">
          <div
            className={`backdrop-filter backdrop-blur-[10px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md  md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
          >
            <h3 className="text-lg md:text-4xl lg:text-5xl font-medium">
              {t[`${title}`]}
            </h3>
            <p className="text-[14px] md:text-xl mt-2 md:mt-4 lg:mt-8">
              {t[`${description}`]}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Slide;
