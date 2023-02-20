import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const MenuLink = ({ blok }: Blok) => {
  console.log(blok);
  return (
    <Link href={blok.link.url} {...storyblokEditable(blok)}>
      {blok.text}
    </Link>
  );
};
export default MenuLink;
