import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CRUD</title>
        <meta property="og:title" content="CRUD" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
