import { Blok } from "@/types/fields";
import Navigation from "./Navigation";

const Header = ({ blok }: Blok) => (
  <div className="sticky top-0 bg-white drop-shadow-xl">
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-9">
      <Navigation blok={blok} />
    </div>
  </div>
);
export default Header;
