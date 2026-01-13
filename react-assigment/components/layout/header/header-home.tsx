"use client";

import { HeaderNav } from "./header-nav-home/header-nav";
import HeaderTop from "./header-top-home/header-top";
import HeroSection from "./hero-section-home/hero-section";

export function HeaderHome() {
  return (
    <header>
      <HeaderNav />
      <HeroSection />
    </header>
  );
}