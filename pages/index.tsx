import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { GetStaticProps } from "next";
import pageQuery from "@/lib/pageQuery";
import { Blok } from "@/types/fields";
import Layout from "@/components/global/Layout";

export default function Home({ story: initialStory, config }: Blok) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout blok={config.content}>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const query = await pageQuery("home", "draft");

    return query;
  } catch (error) {
    return { notFound: true };
  }
};
