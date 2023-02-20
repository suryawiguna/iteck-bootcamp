import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react";

const pageQuery = async (
  slug: string,
  version: "draft" | "published" | undefined
) => {
  const storyblokApi = getStoryblokApi();

  const params: ISbStoriesParams = {
    version: version, // or published
  };

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
  let { data: config } = await storyblokApi.get("cdn/stories/config", params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export default pageQuery;
