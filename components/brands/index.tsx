import React from "react";
import BrandBox from "./BrandBox";
import { brandContent } from "../../mock/brand";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../UI/CarouselBox/CarouselBoxArrows";
const Brands = () => {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 12,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
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
