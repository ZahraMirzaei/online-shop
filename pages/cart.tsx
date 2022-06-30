import type { NextPage } from "next";
import CartList from "../components/cart/CartList";
import Breadcrumb from "../components/UI/Breadcrumb";

const cart: NextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <CartList />
    </div>
  );
};

export default cart;
