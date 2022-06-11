import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import { SidebarContextProvider } from "../../store/context/NavContext";
import store from "../../store/index";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>ZiShop e-commerce</title>
        </Head>
        <header>
          <SidebarContextProvider>
            <Header />
          </SidebarContextProvider>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
