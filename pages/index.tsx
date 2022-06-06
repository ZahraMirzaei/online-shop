import type { NextPage } from "next";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";

import { IProduct } from "../lib/interface/products";
import { ICategory } from "../lib/interface/categories";

const Home: NextPage<{ products: IProduct[]; categories: ICategory[] }> = ({
  products,
  categories,
}) => {
  return (
    <div>
      <Carousel />
      <Benefits />
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
