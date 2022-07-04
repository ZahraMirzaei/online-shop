import React from "react";
import BrandBox from "./BrandBox";
import { brandContent } from "../../mock/brand";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../UI/CarouselBox/CarouselBoxArrows";
import { useLanguage } from "../../hooks/useLanguage";
const Brands = () => {
  const { t } = useLanguage();
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="p-1 text-center">
      <h2 className="mx-auto text-2xl md:text-3xl my-4 md:mt-8 mb-8">
        {t.popularBrands}
      </h2>
      <Slider {...settings}>
        {brandContent.map((brandItem) => {
          return (
            <BrandBox
              key={brandItem.id}
              brandName={brandItem.name}
              imageSrc={brandItem.imgSrc}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Brands;
