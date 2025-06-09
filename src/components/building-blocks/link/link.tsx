import { buttonVariants } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TypeComponentLink } from "@/lib/types";
import Link from "next/link";

interface LinkProps {
  data: TypeComponentLink;
}

export default function BasicLink({ data }: LinkProps) {
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
      {data.linkIcon && <Icon name={data.linkIcon} />}
      {data.linkName}
    </Link>
  );
}
