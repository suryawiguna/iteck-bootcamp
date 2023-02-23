import Link from "next/link";
import { Blok } from "@/types/fields";
import RichText from "./Richtext";
import { IconBlok, Icon } from "./Icon";
import { storyblokEditable } from "@storyblok/react";

const Footer = ({ blok }: Blok) => {
  return (
    <div
      className="bg-black text-gray-400 text-sm py-8 px-4"
      {...storyblokEditable(blok)}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between">
        <RichText document={blok.copyright} className="text-white" />
        <div>
          {blok.icons.map((icon: IconBlok) => (
            <Link
              key={icon._uid}
              href={icon.link.url}
              className="mx-3 hover:text-white"
            >
              <Icon iconName={icon.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
