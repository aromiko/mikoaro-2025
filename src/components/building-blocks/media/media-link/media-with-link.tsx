import Link from "next/link";

interface MediaLinkProps {
  url?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function MediaLink({ url, isExternal, children }: MediaLinkProps) {
  if (url) {
    if (isExternal) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else {
      return <Link href={url}>{children}</Link>;
    }
  }

  return children;
}
