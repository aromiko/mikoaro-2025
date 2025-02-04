import Image, { StaticImageData } from "next/image";

interface LogoProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ src, width, height, alt = "Logo" }) => {
  return <Image src={src} alt={alt} width={width} height={height} priority />;
};

export default Logo;
