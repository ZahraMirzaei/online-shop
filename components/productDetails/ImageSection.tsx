import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../../lib/client";
import { TImage } from "../../lib/types/products";
import ProductPageActions from "./ProductPageActions";

interface Props {
  imgArray: TImage[];
}
const ImageSection: React.FC<Props> = ({ imgArray }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  function onClickHandler(index: number) {
    setSelectedImg(index);
  }
  return (
    <div className="flex items-start relative rounded-lg">
      <ProductPageActions />
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between">
          <Image
            src={urlFor(imgArray[selectedImg]).url()}
            alt="product img"
            width={480}
            height={330}
            className="object-contain md:drop-shadow-xl md:!py-8"
          />
        </div>

        <div className="flex mt-4  md:p-4">
          {imgArray.map((imgItem: TImage, index: number) => {
            return (
              <div
                key={imgItem._key}
                className={`flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out ${
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
