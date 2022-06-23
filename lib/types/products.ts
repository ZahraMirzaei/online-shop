export interface IProductDetails {
  processor?: string;
  screen?: string;
  operating_system?: string;
  ram?: string;
  ssd?: string;
  port?: string;
  graphic?: string;
  warranty?: string;
  back_camera?: string;
  front_camera?: string;
  battery?: string;
}

export type TSlug = {
  _type: string;
  current: string;
};

export type TCategory = {
  _key: string;
  _ref: string;
  _type: "reference";
};

// export type TImage = {
//   _key: string;
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// };

export interface IProduct {
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  irrprice: number;
  discount?: number;
  irrdiscount?: number;
  details: IProductDetails[];
  brand: string;
  category: TCategory[];
  isOffer: boolean;
  registerDate: string;
  timeStamp?: number;
  starRating: number;
}
export interface IProductWithSubCategory {
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  irrprice: number;
  discount?: number;
  irrdiscount?: number;
  details: IProductDetails[];
  brand: string;
  category: string;
  subCategory: string;
  isOffer: boolean;
  registerDate: string;
  timeStamp?: number;
  starRating: number;
}
