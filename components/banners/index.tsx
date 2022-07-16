import React from "react";
import BannerBox from "./banner-box/BannerBox";
import { bannerContent } from "../../mock/banner";
import { useLanguage } from "../../hooks/useLanguage";

const Banner = () => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center flex-col xl:max-w-[2100px] mx-auto">
      <h2 className="my-4 text-2xl md:text-3xl">{t.specialSale}</h2>
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12 mt-4 md:mt-8 mb-8 sm:mb-16">
        {bannerContent.map(
          ({
            title,
            description,
            numberOfDiscountDate,
            href,
            imgHeight,
            imgSrc,
            imgWidth,
            buttonText,
          }) => {
            return (
              <BannerBox
                title={title}
                description={description}
                numberOfDiscountDate={numberOfDiscountDate}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                buttonText={buttonText}
                key={title}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Banner;
