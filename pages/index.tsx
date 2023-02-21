import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { GetStaticProps } from "next";
import pageQuery from "@/lib/pageQuery";
import { Blok } from "@/types/fields";
import Layout from "@/components/global/Layout";

export default function Home({ story: initialStory, header, footer }: Blok) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout header={header} footer={footer} story={story}>
      <StoryblokComponent blok={story.content} />;
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = await pageQuery("home", "draft");

  if (!query) {
    return { notFound: true };
  }

  return query;
};
