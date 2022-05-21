import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Header from "../components/header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
