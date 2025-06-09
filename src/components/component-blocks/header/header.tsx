import BasicMedia from "@/components/building-blocks/basic-media/basic-media";
import { TypeComponentHeader } from "@/lib/types";

export default function Header({
  headerName,
  headerLogo
}: TypeComponentHeader) {
  return (
    <div className="justify-items-center">
      <div className="container p-4 font-bold">
        {headerLogo && <BasicMedia data={headerLogo} />}

        <div>{headerName}</div>
      </div>
    </div>
  );
}
