import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { GetStaticProps } from "next";
import pageQuery from "@/lib/pageQuery";
import { Blok } from "@/types/fields";

export default function Home({ story: initialStory }: Blok) {
  const story = useStoryblokState(initialStory);

  return <StoryblokComponent blok={story.content} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const query = await pageQuery("home", "draft");

    return query;
  } catch (error) {
    return { notFound: true };
  }
};
