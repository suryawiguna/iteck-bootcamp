import { Blok } from "@/types/fields";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export default function RichText({ document }: Blok, className?: string) {
  // document is the rich text object you receive from Storyblok,
  // in the form { type: "doc", content: [ ... ] }
  return render(document, {
    markResolvers: {
      bold: (children) => <strong>{children}</strong>,
      underline: (children) => <u>{children}</u>,
      link: (children, props) => {
        const { href, target, linktype } = props;

        return (
          <Link href={href || ""} className={className}>
            {children}
          </Link>
        );
      },
    },
  });
}
