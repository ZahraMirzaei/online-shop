import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../lib/client";
import { IProduct } from "../../lib/types/products";
import ProductList from "../../components/productList/ProductList";
import { ICategoryPathsParams } from "../../lib/types/pagePathsParams";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{
    "category":category[0]
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: ICategoryPathsParams) => ({
    params: {
      category: product.category,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category;
  const productQuery = `*[_type=='product'&& category[0]=="${category}"]`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products: products,
    },
  };
};
