import { Blok } from "@/types/fields";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Config = ({ blok }: Blok) => {
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1"></div>
          {blok.header_menu.map((nestedBlok: Blok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Config;
