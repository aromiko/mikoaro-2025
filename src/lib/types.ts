import type { Route } from "next";
import type { StaticImageData } from "next/image";

export type Cta = {
  href: Route;
  label: string;
};

export type ImageAsset = {
  src: StaticImageData;
  alt: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  tenure: string;
  summary: string;
  logo: StaticImageData;
};
