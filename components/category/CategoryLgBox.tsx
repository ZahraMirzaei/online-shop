import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  name: string;
  title: string;
  description: string;
  styles: {
    backgroundColor: string;
    flexDirection: string;
    paddingInline: string;
    paddingBlock: string;
    textAlign?: string;
    gridRow: string;
    gridColumn: string;
  };
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}
const CategoryLgBox: React.FC<Props> = ({
  name,
  title,
  description,
  styles,
  href,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  const { t } = useLanguage();

  return (
    <div
      key={title}
      className={`flex justify-around items-center rounded-md shadow-lg overflow-hidden`}
      style={styles as React.CSSProperties}
    >
      <div className="mx-[0.5rem]">
        <h3 className="text-xl 2xl:text-2xl font-[500]">{t[`${title}`]}</h3>
        <p className="text-sm 2xl:text-base mt-4">{t[`${description}`]}</p>
        <Link href={href}>
          <a className="inline-block bg-palette-primary shadow-xl hover:shadow-md transition-all duration-300 text-palette-side py-3 px-2 2xl:px-4 rounded-lg mt-4 ltr:text-sm rtl:text-[12px]">
            {t.seeAllProducts}
          </a>
        </Link>
      </div>
      <Image
        src={imgSrc}
        alt={name}
        width={imgWidth}
        height={imgHeight}
        className="drop-shadow-lg hover:scale-95 transition-transform duration-300 "
      />
    </div>
  );
};

export default CategoryLgBox;
