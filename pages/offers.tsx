import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { client } from "../lib/client";
import { IProduct } from "../lib/types/products";
import ProductList from "../components/productList/ProductList";

const offers: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default offers;

export const getStaticProps: GetStaticProps = async () => {
  const productQuery = `*[_type=='product'&& isOffer==true]`;
  const products = await client.fetch(productQuery);
  return {
    props: {
      products: products,
    },
  };
};
