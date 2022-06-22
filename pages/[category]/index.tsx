import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../lib/client";
import { IProduct } from "../../lib/types/products";
import ProductList from "../../components/productList/ProductList";

const categoryPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default categoryPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category;
  const productQuery = `*[_type=='product'&& category[0]=="${category}"]`;
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
        },
      },
    ],
  };
};
