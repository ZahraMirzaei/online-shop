import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
