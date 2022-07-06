import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../../lib/client";
import { IProduct, TImage } from "../../lib/types/products";
import ProductPageActions from "./ProductPageActions";

interface Props {
  imgArray: TImage[];
  product: IProduct;
}
const ImageSection: React.FC<Props> = ({ imgArray, product }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  function onClickHandler(index: number) {
    setSelectedImg(index);
  }
  return (
    <div className="flex items-start rounded-lg w-full md:w-auto">
      <ProductPageActions product={product} />
      <div className="flex flex-col items-center w-full md:w-auto">
        <div className="flex flex-grow md:ltr:mr-3 md:rtl:ml-3">
          <Image
            src={urlFor(imgArray[selectedImg]).url()}
            alt="product img"
            width={450}
            height={330}
            className="object-contain md:drop-shadow-xl dark:bg-palette-card"
          />
        </div>

        <div className="flex mt-4  md:p-4 w-full max-w-[350px] overflow-auto">
          {imgArray.map((imgItem: TImage, index: number) => {
            return (
              <div
                key={imgItem._key}
                className={`flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px] ${
                  index === selectedImg
                    ? "border-2 border-slate-300/60 shadow-md bg-palette-card/60"
                    : ""
                }`}
                onClick={() => onClickHandler(index)}
              >
                <Image
                  src={urlFor(imgItem).url()}
                  width={70}
                  height={70}
                  alt="product img"
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
