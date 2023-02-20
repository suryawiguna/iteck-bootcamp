import { Blok } from "@/types/fields";
import Config from "./Config";

interface LayoutProps {
  story: Blok;
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({ children, story, className }: LayoutProps) => (
  <div className={className}>
    <Config blok={story.content} />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
