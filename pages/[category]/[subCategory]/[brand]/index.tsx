import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../../../lib/client";
import { IProduct } from "../../../../lib/types/products";
import ProductList from "../../../../components/productList/ProductList";

const brandPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default brandPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const brand = context.params?.brand;
  const subCategory = context.params?.subCategory;
  const productQuery = `*[_type=='product'&& category[1]=="${subCategory}" && brand=="${brand}"]`;
  const products = await client.fetch(productQuery);
  console.log(brand);

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
          brand: "asus",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "mobile",
          brand: "apple",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "computer",
          brand: "lenovo",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "other",
          brand: "samsung",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "other",
          brand: "dell",
        },
      },
      {
        params: {
          category: "digital",
          subCategory: "other",
          brand: "hp",
        },
      },
    ],
  };
};
