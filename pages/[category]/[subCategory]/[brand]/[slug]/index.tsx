import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ProductDetails from "../../../../../components/productDetails";
import { client } from "../../../../../lib/client";
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

export const getStaticProps: GetStaticProps = async (context) => {
  const subCategory = context.params?.subCategory;
  const category = context.params?.category;
  const brand = context.params?.brand;
  const slug = context.params?.slug;
  const productQuery = `*[_type=='product'&& category[0]=="${category}" &&category[1]=="${subCategory}" && brand=="${brand}" && slug.current=="${slug}"] `;
  const productsQuery = `*[_type=='product'&& category[0]=="${category}" &&category[1]=="${subCategory}"]`;

  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product: product[0],
      products,
    }, // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          category: "digital",
          subCategory: "mobile",
          brand: "xiaomi",
          slug: "xiaomi-redmi-note-11-128-gb-graphite-gray",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "mobile",
          brand: "apple",
          slug: "apple-iphone-13-128-gb-midnight",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "mobile",
          brand: "samsung",
          slug: "samsung-galaxy-a32-5g-64-gb-awesome-black",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "laptop",
          brand: "lenovo",
          slug: "lenovo-thinkbook-15-g2-intel-core-i5-8gb-ram-256gb-ssd-windows-11-pro-15-6-laptop",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "laptop",
          brand: "samsung",
          slug: "samsung-galaxy-book-intel-core-i7-8gb-ram-512gb-ssd-windows-10-home-15-6-laptop",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "laptop",
          brand: "asus",
          slug: "asus-zenbook-14-intel-core-i7-16gb-ram-512gb-ssd-14-ips-laptop",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "other",
          brand: "JBL",
          slug: "jbl-tune-750-btnc-wireless-over-ear-bluetooth-headphones-with-active-noise-cancellation",
        },
      },
    ],
  };
};
