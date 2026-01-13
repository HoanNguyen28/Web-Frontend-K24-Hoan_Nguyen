"use client";

import { HeaderNavLeft } from "./header-nav-left";
import { HeaderNavCenter } from "./header-nav-center";
import { HeaderNavRight } from "./header-nav-right";

export function HeaderNav() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-6 flex items-center h-16">
        <HeaderNavLeft />
        <HeaderNavCenter />
        <HeaderNavRight />
      </div>
    </div>
  );
}