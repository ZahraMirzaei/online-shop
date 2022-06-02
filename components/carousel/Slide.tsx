import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { ISlider } from "../../lib/interface/slider";

interface Props {
  sliderItem: ISlider;
  // className: string;
}
const Slide: React.FC<Props> = (props) => {
  const { t } = useLanguage();
  const { title, description, imgSrc, url, className } = props.sliderItem;
  return (
    <div className="relative  ">
      <Link href={url}>
        <a className="block">
          <Image src={imgSrc} alt={t[`${title}`]} width="2000" height="700" />
          <div
            className={`absolute ${className} backdrop-filter backdrop-blur-[16px] bg-palette-card/20  p-10 shadow-lg overflow-hidden ltr:text-left rtl:text-right rounded-md w-[40%]`}
          >
            <h3 className="text-5xl font-medium">{t[`${title}`]}</h3>
            <p className=" mt-8">{t[`${description}`]}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Slide;
