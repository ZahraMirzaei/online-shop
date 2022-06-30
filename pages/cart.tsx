import type { NextPage } from "next";
import CartList from "../components/cart/CartList";
import Breadcrumb from "../components/UI/Breadcrumb";
import OrderSummaryBox from "../components/cart/OrderSummaryBox";

const cart: NextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-center flex-col md:flex-row items-start relative">
        <CartList />
        <OrderSummaryBox />
      </div>
    </div>
  );
};

export default cart;
