import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { GetStaticProps } from "next";

import DynamicComponent from "@/components/global/dynamicComponent";
import * as Components from "@/components/home";

interface StoryblokParam {
  story: any;
}

export default function Home({ story: initialStory }: StoryblokParam) {
  const story = useStoryblokState(initialStory);

  return <DynamicComponent story={story} components={Components} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  let slug = "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft", // or published
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};
