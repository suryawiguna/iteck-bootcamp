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
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { Blok, LinkField } from "@/types/fields";

library.add(
  faB,
  faFacebookF,
  faTwitter,
  faBehance,
  faYoutube,
  faLinkedin,
  faDribbble
);

interface Props {
  iconName: IconName;
}

export interface IconBlok extends Blok {
  name: IconName;
  link: LinkField;
}

export const Icon = ({ iconName }: Props) => {
  return <FontAwesomeIcon icon={["fab", iconName]} />;
};
