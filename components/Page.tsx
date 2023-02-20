import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok } from "@/types/fields";

const Page = ({ blok }: Blok) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: Blok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
