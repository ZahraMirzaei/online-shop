import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ProductDetails from "../../../../../components/productDetails";
import { client } from "../../../../../lib/client";
import { ISlugPathsParams } from "../../../../../lib/types/pagePathsParams";
import { IProduct } from "../../../../../lib/types/products";

const productDetailsPage: NextPage<{
  product: IProduct;
  products: IProduct[];
}> = ({ product, products }) => {
  return (
    <div>
      <ProductDetails product={product} products={products} />
    </div>
  );
};

export default productDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug{current},
    "category":category[0],
    "subCategory":category[1],
    "title":category[2],
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: ISlugPathsParams) => ({
    params: {
      slug: product.slug.current,
      category: product.category,
      subCategory: product.subCategory,
      title: product.title,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const category = context.params?.category;
  const subCategory = context.params?.subCategory;
  const productQuery = `*[_type=='product' && slug.current=="${slug}"][0]`;
  const productsQuery = `*[_type=='product' && category[0]=="${category}" && category[1]=="${subCategory}"]`;

  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};
