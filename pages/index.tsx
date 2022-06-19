import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
import Offers from "../components/Offers/Offers";
import Category from "../components/category/Category";
import Newest from "../components/newest/Newest";

// import Banners from "../components/banners";
//used dynamic to import Banners because I use setInterval for countdown component and
//I get Error in console (Error:"text content did not match. server client nextjs")
const Banners = dynamic(() => import("../components/banners"), { ssr: false });

import { IProduct } from "../lib/types/products";
import { ICategory } from "../lib/types/categories";

const Home: NextPage<{ products: IProduct[]; categories: ICategory[] }> = ({
  products,
  categories,
}) => {
  const dispatch = useDispatch();

  //add products to offers list
  useEffect(() => {
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));
  }, [dispatch, products]);

  //newest products
  function getTimeStamp(date: string) {
    const creationProductDate = new Date(date);
    return creationProductDate.getTime();
  }

  const sortByTimeStamp = (product1: IProduct, product2: IProduct): number => {
    if (product2?.timeStamp && product1?.timeStamp) {
      return product2?.timeStamp - product1?.timeStamp;
    }
    return 0;
  };

  //add products to newest list
  useEffect(() => {
    const productsWithTimeStamp = products.map((product) => {
      return { ...product, timeStamp: getTimeStamp(product.registerDate) };
    });
    const sortedProductsByTimeStamp =
      productsWithTimeStamp.sort(sortByTimeStamp);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [products, dispatch]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
      <Banners />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  const categoryQuery = `*[_type=='category']`;
  const categories = await client.fetch(categoryQuery);
  return {
    props: {
      products,
      categories,
    },
  };
};
