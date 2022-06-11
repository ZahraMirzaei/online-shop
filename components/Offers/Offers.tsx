import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { useSelector } from "react-redux";

const Offers = () => {
  const OfferProducts = useSelector(
    (state: any) => state.specialOfferProductsList.specialOfferProducts
  );

  return (
    <div>
      <CarouselBox
        title="offers"
        className="bg-offersBG"
        productList={OfferProducts}
      />
    </div>
  );
};

export default Offers;
