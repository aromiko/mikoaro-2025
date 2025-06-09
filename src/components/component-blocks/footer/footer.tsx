import { TypeComponentFooter } from "@/lib/types";

export default function Footer({ footerName }: TypeComponentFooter) {
  return (
    <div className="justify-items-center">
      <div className="container p-4">{footerName}</div>
    </div>
  );
}
