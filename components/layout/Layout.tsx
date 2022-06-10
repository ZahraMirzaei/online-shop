import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import { SidebarContextProvider } from "../../store/context/NavContext";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
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
  );
};

export default Layout;
