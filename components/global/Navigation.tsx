import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";
import NextLink from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = ({ blok }: Blok) => {
  const [open, isOpen] = useState(false);

  return (
    <nav
      {...storyblokEditable(blok)}
      className="flex flex-col md:flex-row md:justify-between"
    >
      <div className="flex justify-between items-center">
        <Image
          src={blok.logo.filename}
          width={150}
          height={47}
          alt={blok.logo.alt}
        />
        {/* TOGGLE BUTTON */}
        <button
          className="group md:hidden p-4"
          onClick={() => {
            isOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faBars} fontSize={28} color={"#555555"} />
        </button>
      </div>
      <div
        className={`bg-white md:flex md:flex-row${
          open ? " flex flex-col" : " hidden"
        }`}
      >
        <ul className="md:flex md:flex-row items-center flex-1">
          {blok.menu.map((menu: Blok) => {
            return (
              <li key={menu._uid} className="group">
                <NextLink
                  href={menu.link.url}
                  {...storyblokEditable(menu)}
                  className="flex text-sm p-2 mx-4 hover:text-orange-400"
                >
                  {menu.text}
                  {menu.submenu.length > 0 && (
                    <span className="ml-1">
                      <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                    </span>
                  )}
                </NextLink>
                {menu.submenu.length > 0 && (
                  <ul className="md:absolute bg-white py-4 rounded-lg shadow-2xl w-40 hidden group-hover:block">
                    {menu.submenu.map((submenu: Blok) => (
                      <li key={submenu._uid} className="flex flex-col">
                        <NextLink
                          href={submenu.link.url}
                          {...storyblokEditable(submenu)}
                          className="text-xs py-3 px-5 hover:text-orange-400 hover:bg-gray-100"
                        >
                          {submenu.text}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <NextLink
        href={blok.cta_link.url}
        className={`text-sm py-3 px-7 mt-4 md:m-0 self-start md:block rounded-full bg-black text-white hover:bg-orange-400${
          open ? " block" : " hidden"
        }`}
      >
        {blok.cta_text}
      </NextLink>
    </nav>
  );
};
export default Navigation;
