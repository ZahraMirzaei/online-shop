import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../../../lib/client";
import { IProduct } from "../../../../lib/types/products";
import ProductList from "../../../../components/productList/ProductList";
import { ITitlePathsParams } from "../../../../lib/types/pagePathsParams";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{
    "subCategory":category[1],
    "title":category[2],
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: ITitlePathsParams) => ({
    params: {
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
  const title = context.params?.title;
  const subCategory = context.params?.subCategory;
  const productQuery = `*[_type=='product'&& category[1]=="${subCategory}" && category[2]=="${title}"]`;

  const products = await client.fetch(productQuery);

  return {
    props: {
      products: products,
    },
  };
};
