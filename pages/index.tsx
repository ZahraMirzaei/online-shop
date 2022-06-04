import type { NextPage } from "next";
import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";

const Home: NextPage = () => {
  return (
    <div>
      <Carousel />
      <Benefits />
    </div>
  );
};

export default Home;
