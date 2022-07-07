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
        <link rel="shortcut icon" href="/images/zishop.ico" />
      </Head>
      <body className="px-5 xl:px-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
