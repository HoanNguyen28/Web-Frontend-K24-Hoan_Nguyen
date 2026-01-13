"use client";
import Image from "next/image";
import Link from "next/link";

export function HeaderTopLeft() {
  return (
    <div className="w-[230px] flex items-center pl-4">
      <Link href="/">
        <Image
          src="/assets/img/logo/logo.png"
          alt="Logo"
          width={180}
          height={40}
          priority
        />
      </Link>
    </div>
  );
}
