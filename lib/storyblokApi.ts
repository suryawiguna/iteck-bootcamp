import { ISbStoryData } from "@storyblok/react";

interface RequestBody {
  variables?: any;
  preview?: boolean;
}

async function fetchAPI(query: string, { variables, preview }: RequestBody) {
  const token = preview
    ? process.env.STORYBLOK_ACCESS_TOKEN_PREVIEW
    : process.env.STORYBLOK_ACCESS_TOKEN;

  const headers = {
    "Content-Type": "application/json",
    Token: token || "",
    Version: preview ? "draft" : "published",
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  const res = await fetch("https://gapi.storyblok.com/v1/api", options);

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPageBySlug(
  slug: string,
  preview = false
): Promise<ISbStoryData> {
  const data = await fetchAPI(
    `
        {
          PageItem(id: "${slug}", resolve_links: "url") {
            content {
              _uid
              body
            }
            slug
            full_slug
          }
        }
      `,
    {
      preview: preview,
    }
  );
  return data?.PageItem;
}
