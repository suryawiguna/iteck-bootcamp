import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }: Blok) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
