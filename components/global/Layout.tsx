import { Blok } from "@/types/fields";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
  story: Blok;
  navigation: Blok;
  footer: Blok;
  children?: React.ReactNode;
  className?: string;
}
const Layout = ({
  children,
  navigation,
  footer,
  story,
  className,
}: LayoutProps) => (
  <div className={className}>
    <Head>
      <title>{story.content.seo.title}</title>
      <meta property="og:title" content={story.content.seo.title} key="title" />
      <meta
        property="og:description"
        content={story.content.seo.description}
        key="description"
      />
    </Head>
    <Navigation blok={navigation.content} />
    <div className="mx-auto text-black-2">{children}</div>
    <Footer blok={footer.content} />
  </div>
);

export default Layout;
