import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { client } from "../lib/client";
import { IProduct } from "../lib/types/products";
import ProductList from "../components/productList/ProductList";
import { newestProductsFn } from "../utilities/sortByTimeStamp";

const NewestProduct: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  const [productsList, setProductsList] = useState<IProduct[] | []>([]);

  useEffect(() => {
    setProductsList(newestProductsFn(products));
  }, [products]);

  return (
    <div className="flex flex-wrap">
      {productsList.length ? <ProductList productList={productsList} /> : null}
    </div>
  );
};

export default NewestProduct;

export const getStaticProps: GetStaticProps = async () => {
  const productQuery = `*[_type=='product' && slug.current != "asus-zenbook-14-intel-core-i7-16gb-ram-512gb-ssd-14-ips-laptop"]`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products: products,
    },
  };
};
