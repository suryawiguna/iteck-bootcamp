import { Blok } from "@/types/fields";

const Feature = ({ blok }: Blok) => (
  <div className="column feature">{blok.name}</div>
);

export default Feature;
