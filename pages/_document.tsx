import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="md:py-10 md:px-28">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
