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
  let { data: header } = await storyblokApi.get(
    "cdn/stories/layout/header",
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
      header: header ? header.story : false,
      footer: footer ? footer.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export default pageQuery;
