import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { IProduct } from "../../lib/interface/products";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";
import { NextArrow, PrevArrow } from "../UI/CarouselBox/CarouselBoxArrows";

const Offers = () => {
  const OfferProducts = useSelector(
    (state: any) => state.specialOfferProductsList.specialOfferProducts
  );

  const settings = {
    className: "center",
    infinite: false,
    speed: 600,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 5,
    // initialSlide: 0,
    swipeToSlide: true,
    // rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:mt-10">
      <CarouselBox title="offers" className="bg-offersBG" href="/">
        <Slider {...settings}>
          {OfferProducts.slice(0, 10).map((product: IProduct) => {
            return <CarouselBoxCard key={product.name} product={product} />;
          })}
        </Slider>
      </CarouselBox>
    </div>
  );
};

export default Offers;
