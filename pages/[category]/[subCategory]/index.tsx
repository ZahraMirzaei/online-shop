import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../../lib/client";
import { IProduct } from "../../../lib/types/products";
import ProductList from "../../../components/productList/ProductList";

const subCategory: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default subCategory;

export const getStaticProps: GetStaticProps = async (context) => {
  const subCategory = context.params?.subCategory;
  const category = context.params?.category;
  const productQuery = `*[_type=='product'&& category[0]=="${category}" &&category[1]=="${subCategory}"]`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products: products,
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
          subCategory: "laptop",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "mobile",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "computer",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "other",
        },
      },
    ],
  };
};
