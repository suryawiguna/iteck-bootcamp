import { Blok } from "@/types/fields";
import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }: Blok) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam
    perferendis, tenetur natus laudantium distinctio, soluta debitis at fugit
    excepturi nisi libero atque culpa dolores, nemo ab ut sunt sit alias quas. A
    quos, totam facilis nemo tempore sunt molestiae in porro debitis
    perspiciatis enim, ratione officia? Ut vitae cumque ea id omnis, doloribus
    quisquam et ab nisi, delectus accusantium eius unde non necessitatibus
    ratione ipsum ducimus eaque? Eveniet, eum quas. Architecto itaque amet
    magnam animi necessitatibus tempore voluptatum, facilis voluptatem sapiente
    aut vel enim. Cumque eos optio tempore, officia quibusdam hic obcaecati nemo
    totam necessitatibus, iste quod architecto fugit.
  </div>
);

export default Feature;
