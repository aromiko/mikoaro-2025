import Media from "@/components/building-blocks/media/media";
import { TypeComponentHeader } from "@/lib/types";

export default function Header({
  headerName,
  headerLogo
}: TypeComponentHeader) {
  return (
    <div className="justify-items-center">
      <div className="container p-4 font-bold">
        {headerLogo && <Media data={headerLogo} />}

        <div>{headerName}</div>
      </div>
    </div>
  );
}
