import { buttonVariants } from "@/components/ui/button";
import { TypeComponentBasicLink } from "@/lib/types";
import Link from "next/link";

interface BasicLinkProps {
  data: TypeComponentBasicLink;
}

export default function BasicLink({ data }: BasicLinkProps) {
  const isExternal = data.linkIsExternal;

  return (
    <Link
      href={data.linkUrl || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={buttonVariants({
        variant: data.linkIsButton ? "default" : "link"
      })}
    >
      {data.basicLinkName}
    </Link>
  );
}
