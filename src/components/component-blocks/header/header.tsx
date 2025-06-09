import BasicLink from "@/components/building-blocks/link/link";
import Media from "@/components/building-blocks/media/media";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TypeComponentHeader } from "@/lib/types";
import { cn } from "@/lib/utils/classnames";
import Link from "next/link";

export default function Header({
  headerName,
  headerLogo,
  headerLinkList
}: TypeComponentHeader) {
  return (
    <div className="justify-items-center">
      <div className="container m-4 flex items-center justify-between rounded-2xl border p-6">
        {headerLogo && <Media data={headerLogo} />}

        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link", className: "text-2xl" })
          )}
        >
          miko aro
        </Link>
        {headerLinkList?.linkListGroupCollection && (
          <div className="space-x-2">
            {headerLinkList?.linkListGroupCollection.items?.map(
              (link, index) => <BasicLink key={index} data={link} />
            )}
            <ModeToggle />
          </div>
        )}
      </div>
    </div>
  );
}
