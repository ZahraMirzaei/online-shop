import type { NextPage } from "next";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
import Offers from "../components/Offers/Offers";
import Category from "../components/category/Category";

import { IProduct } from "../lib/interface/products";
import { ICategory } from "../lib/interface/categories";

const Home: NextPage<{ products: IProduct[]; categories: ICategory[] }> = ({
  products,
  categories,
}) => {
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));
  }, [dispatch, products]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
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
