import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import store from "../../store/index";
import Footer from "../footer";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>ZiShop</title>
        </Head>
        <div className="flex flex-col min-h-[100vh]">
          <Header />
          <main className="flex-grow  md:mt-40">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
