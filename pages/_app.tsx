import type { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import components from "@/lib/components";
import Layout from "@/components/global/Layout";

import { Inter } from "@next/font/google";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN_PREVIEW,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout story={pageProps.config} className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
