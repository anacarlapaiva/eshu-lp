import { SiteFooter } from "@/components/layout/SiteFooter";
import { mainContentId } from "@/constants/links";
import { CurriculumSection } from "@/features/curriculum";
import { FaqSection } from "@/features/faq";
import { FinalCtaSection } from "@/features/finalCta";
import { HeroSection } from "@/features/hero";
import { IncludedSection } from "@/features/included";
import { IntroSection } from "@/features/intro";
import { LearnSection } from "@/features/learn";
import { NamesMarquee } from "@/features/marquee";
import { OfferSection } from "@/features/offer";
import { PriestessSection } from "@/features/priestess";
import { ShowcaseSection } from "@/features/showcase";
import { TestimonialsSection, testimonialsA, testimonialsB } from "@/features/testimonials";
import { WhoSection } from "@/features/who";

export function HomeScreen() {
  return (
    <>
      <main id={mainContentId} tabIndex={-1}>
        <HeroSection />
        <NamesMarquee />
        <IntroSection />
        <WhoSection />
        <LearnSection />
        <TestimonialsSection items={testimonialsA} tone="card" />
        <CurriculumSection />
        <PriestessSection />
        <IncludedSection />
        <ShowcaseSection />
        <OfferSection />
        <TestimonialsSection items={testimonialsB} tone="card" />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
