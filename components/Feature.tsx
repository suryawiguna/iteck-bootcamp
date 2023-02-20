import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }: Blok) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
