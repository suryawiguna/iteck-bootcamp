import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import components from "@/lib/components";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN_PREVIEW,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
