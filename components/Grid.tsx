import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";
import Feature from "./Feature";

const Grid = ({ blok }: Blok) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: Blok) => (
        <Feature key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </div>
  );
};

export default Grid;
