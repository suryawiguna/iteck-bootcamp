import { StoryblokComponentType } from "@storyblok/react";

export type Blok = StoryblokComponentType<string> & { [index: string]: any };

export interface Asset {
  id: number;
  alt: string;
  name: string;
  focus: null;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
}

export interface Color {
  uid: string;
  color: string;
  plugin: "native-color-picker";
}

export interface LinkField {
  id: string;
  url: string;
  anchor: string;
  linktype: "story" | "url";
  fieldtype: "multilink";
  cached_url: string;
  story: Blok;
}

export interface Richtext {
  type: string;
  content: Array<Object>;
}
