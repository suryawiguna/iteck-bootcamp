import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";

interface TeaserBlok extends Blok {
  blok: {
    headline: string;
  };
}

const Teaser = ({ blok }: TeaserBlok) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
