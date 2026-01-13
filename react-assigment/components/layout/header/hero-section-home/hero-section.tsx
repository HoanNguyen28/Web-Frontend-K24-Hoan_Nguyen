import HeroSectionLeft from './hero-section-left';
import HeroSectionCenter from './hero-section-center';
import HeroSectionRight from './hero-section-right';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 ">
      <div className="flex gap-3">
        <HeroSectionLeft />
        <HeroSectionCenter />
        <HeroSectionRight />
      </div>
    </section>
  );
}