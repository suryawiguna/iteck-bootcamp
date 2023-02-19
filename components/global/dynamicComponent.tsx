import { Blok } from "@/types/fields";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface DynamicComponentProps {
  story: Blok;
  components: any;
  [index: string]: any;
}

export default function DynamicComponent({
  story,
  components,
  ...props
}: DynamicComponentProps) {
  return (
    <>
      {story.content.body.map((blok: Blok) => {
        if (
          blok.component &&
          typeof components[blok.component] !== "undefined"
        ) {
          return (
            <div key={blok._uid} {...storyblokEditable(blok)}>
              <StoryblokComponent blok={blok} />
            </div>
          );
        }
        return (
          <p key={blok._uid}>
            The component <strong>{blok.component}</strong> has not been created
            yet.
          </p>
        );
      })}
    </>
  );
}
