import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

export const Logo = ({
  src,
  alt,
  href = "/",
  width = 180,
  height = 100,
}: LogoProps) => {
  return (
    <Link href={href} className="flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: "auto", height: "auto" }}
        className="object-contain"
        priority
      />
    </Link>
  );
};
