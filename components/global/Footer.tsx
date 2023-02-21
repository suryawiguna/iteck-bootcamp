import Link from "next/link";
import { Blok, LinkField } from "@/types/fields";
import RichText from "./Richtext";

// FONTAWESOME ICON
const { library } = require("@fortawesome/fontawesome-svg-core");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, IconName } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faB, faFacebookF, faTwitter, faBehance, faYoutube, faLinkedin);

interface IconBlok extends Blok {
  name: IconName;
  link: LinkField;
}

const Footer = ({ blok }: Blok) => {
  return (
    <div className="bg-black text-gray-400 text-sm py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between">
        {RichText(blok.copyright, "text-white")}
        <div>
          {blok.icons.map((icon: IconBlok) => (
            <Link
              key={icon._uid}
              href={icon.link.url}
              className="mx-3 hover:text-white"
            >
              <span>
                <FontAwesomeIcon key={icon._uid} icon={["fab", icon.name]} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
