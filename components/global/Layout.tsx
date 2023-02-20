import { Blok, Link } from "@/types/fields";
import NextLink from "next/link";

interface MenuLinkBlok extends Blok {
  text: string;
  link: Link;
}

interface ConfigBlok extends Blok {
  header_menu: MenuLinkBlok[];
}

interface LayoutProps {
  blok: ConfigBlok;
  children?: React.ReactNode;
}

const Layout = ({ blok, children }: LayoutProps) => {
  return (
    <>
      <ul>
        {blok?.header_menu.map((item) => {
          return (
            <li>
              <NextLink href={item.link.url}>{item.text}</NextLink>
            </li>
          );
        })}
      </ul>
      <>{children}</>
    </>
  );
};

export default Layout;
