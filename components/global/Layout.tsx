import { Blok } from "@/types/fields";
import Header from "./Header";
import Head from "next/head";

interface LayoutProps {
  story: Blok;
  header: Blok;
  // footer: Blok;
  children?: React.ReactNode;
  className?: string;
}
const Layout = ({ children, header, story, className }: LayoutProps) => (
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
    <Header blok={header.content} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
