import { getStoryblokApi } from "@storyblok/react";
import { Blok } from "@/types/fields";

const pageQuery = async (
  slug: string,
  version: "draft" | "published" | undefined
) => {
  const storyblokApi = getStoryblokApi();

  let page: Blok | null = null;
  let config: Blok | null = null;

  // load content for the page for the requested locale if slug argument is passed
  if (slug !== undefined) {
    page = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: version, // or published
    });
  }

  // load content for header for the requested locale
  config = await storyblokApi.get("cdn/stories/config", {
    version: version,
    resolve_links: "url",
  });

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: page ? page.data.story : false,
      key: page ? page.data.story.id : false,
      config: config ? config.data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export default pageQuery;
