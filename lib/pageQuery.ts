import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react";

const pageQuery = async (
  slug: string,
  version: "draft" | "published" | undefined
) => {
  try {
    const storyblokApi = getStoryblokApi();

    const params: ISbStoriesParams = {
      version: version, // or published
    };

    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
    let { data: navigation } = await storyblokApi.get(
      "cdn/stories/layout/navigation",
      params
    );
    let { data: footer } = await storyblokApi.get(
      "cdn/stories/layout/footer",
      params
    );

    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        navigation: navigation ? navigation.story : false,
        footer: footer ? footer.story : false,
      },
      revalidate: 3600, // revalidate every hour
    };
  } catch (error) {
    return false;
  }
};

export default pageQuery;
