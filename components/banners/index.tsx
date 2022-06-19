import React from "react";
import BannerBox from "./banner-box/BannerBox";
import { bannerContent } from "../../mock/banner";

const Banner = () => {
  return (
    <div className="grid gap-4 grid-cols-6 lg:grid-cols-12 mx-auto my-8 sm:my-16">
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
  );
};

export default Banner;
