import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// Built-in CSS Support Disabled
// yarn add @zeit/next-css @zeit/next-sass
