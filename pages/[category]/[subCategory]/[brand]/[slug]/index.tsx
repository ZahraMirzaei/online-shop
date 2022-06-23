import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ProductDetails from "../../../../../components/productDetails";
import { client } from "../../../../../lib/client";
import { IProduct } from "../../../../../lib/types/products";
import { IProductWithSubCategory } from "../../../../../lib/types/products";

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
    brand,
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: IProductWithSubCategory) => ({
    params: {
      slug: product.slug.current,
      category: product.category.toString(),
      subCategory: product.subCategory.toString(),
      brand: product.brand,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const subCategory = context.params?.subCategory;
  const category = context.params?.category;
  const brand = context.params?.brand;
  const slug = context.params?.slug;
  const productQuery = `*[_type=='product'&& slug.current=="${slug}"][0]`;
  const productsQuery = `*[_type=='product'&& category[0]=="${category}" &&category[1]=="${subCategory}"]`;

  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    }, // will be passed to the page component as props
  };
};
