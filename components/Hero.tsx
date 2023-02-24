import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Icon, IconBlok } from "./global/Icon";
import RichText from "./global/Richtext";

const Lines = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
`;

export const Hero = ({ blok }: Blok) => {
  return (
    <header
      className="h-screen lg:max-h-[720px] py-12 md:py-0 mt-28"
      {...storyblokEditable(blok)}
    >
      <div className="grid lg:grid-cols-2 h-full max-w-6xl mx-auto">
        <div className="my-auto px-4">
          <p className="text-gray-400 text-sm mb-3">{blok.caption}</p>
          <span className="text-4xl md:text-6xl text-black-3 md:leading-snug">
            <RichText document={blok.title} />
          </span>
          <div className="flex mt-7 gap-4">
            <Link
              href={blok.ctaLink.url}
              className="bg-orange rounded-full text-white py-3 px-7"
            >
              <span className="text-xs">{blok.ctaText}</span>
            </Link>
            <div>
              <small className="text-gray-400 text-sm">{blok.ctaCaption}</small>
              <p className="">{blok.ctaNote}</p>
            </div>
          </div>
        </div>
        <div className="relative right-0 overflow-hidden md:overflow-visible">
          <span className="absolute w-[600px] h-[600px] rounded-full z-[-1] bg-orange left-[-100px] top-[40px]" />
          <Image
            src={blok.image.filename}
            width={700}
            height={700}
            alt=""
            className="max-w-[unset] md:ml-[-100px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 absolute z-20 left-8 md:left-16 bottom-2">
        {blok.heroIcons.map((icon: IconBlok) => {
          return (
            <Link
              key={icon._uid}
              href={icon.link.url}
              className="p-4 bg-gray-100 w-[45px] h-[45px] flex items-center justify-center rounded-full"
            >
              <span className="text-sm">
                <Icon iconName={icon.name} />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2 absolute z-20 right-[-120px] bottom-32 text-sm font-semibold rotate-90">
        {blok.heroContacts.map((contact: Blok) => {
          return (
            <Link
              key={contact._uid}
              href={contact.link.url}
              className="p-4 uppercase flex items-center justify-center rounded-full"
            >
              {contact.text}
            </Link>
          );
        })}
      </div>
      <Lines className="grid grid-cols-6">
        <span className="bg-darkGray w-[1px] opacity-10 right-1/4 block h-full"></span>
        <span className="bg-darkGray w-[1px] opacity-10 right-2/4 block h-full"></span>
        <span className="bg-darkGray w-[1px] opacity-10 right-2/4 block h-full"></span>
        <span className="bg-darkGray w-[1px] opacity-10 right-2/4 block h-full"></span>
        <span className="bg-darkGray w-[1px] opacity-10 right-2/4 block h-full"></span>
        <span className="bg-darkGray w-[1px] opacity-10 right-2/4 block h-full"></span>
      </Lines>
    </header>
  );
};
