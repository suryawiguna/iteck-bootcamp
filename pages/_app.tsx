import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import components from "@/lib/components";
import Layout from "@/components/global/Layout";

import { Inter } from "@next/font/google";

// import Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      header={pageProps.header}
      footer={pageProps.footer}
      story={pageProps.story}
      className={inter.className}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
