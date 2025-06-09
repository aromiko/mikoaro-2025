import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface TypeComponentLink {
  linkName: string;
  linkText?: string;
  linkUrl?: string;
  linkIsExternal: boolean;
  linkIsButton: boolean;
  linkIcon?: keyof typeof dynamicIconImports;
}
