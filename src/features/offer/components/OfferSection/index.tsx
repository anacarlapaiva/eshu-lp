import { Infinity, ShieldCheck } from "lucide-react";

import { EmberField, EnrollButton } from "@/components";
import { revealOnScroll } from "@/animations";
import { heroImages } from "@/constants/assets";

import {
  Badge,
  Bg,
  Card,
  Copy,
  NewPrice,
  OldPrice,
  Overlay,
  Perk,
  Perks,
  Prices,
  Section,
  Title,
} from "./styles";

export function OfferSection() {
  return (
    <Section id="offer">
      <Bg src={heroImages.path} alt="" loading="lazy" width={1920} height={1088} />
      <Overlay aria-hidden />
      <EmberField />
      <Card {...revealOnScroll()}>
        <Badge>Black Friday</Badge>
        <Title>A Limited Time Offer</Title>
        <Copy>
          Voice of Eshu is normally $197. For Black Friday, the full course, including all bonuses,
          is available at:
        </Copy>
        <Prices>
          <OldPrice>$197</OldPrice>
          <NewPrice>$97</NewPrice>
        </Prices>
        <EnrollButton variant="block">Enroll Now</EnrollButton>
        <Perks>
          <Perk>
            <ShieldCheck aria-hidden /> 7-day money-back
          </Perk>
          <Perk>
            <Infinity aria-hidden /> Instant access
          </Perk>
        </Perks>
      </Card>
    </Section>
  );
}
