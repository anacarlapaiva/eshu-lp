import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { courseMockups } from "@/constants/assets";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Action, Devices, Intro, Lead, OfferLink, Seal, Stage } from "./styles";

export function ShowcaseSection() {
  return (
    <SectionShell>
      <Container width="wide">
        <Intro>
          <SectionEyebrow>Voice of Eshu</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>A 13-lesson self-paced course</SectionTitle>
          <Lead>
            With Priestess Iyá Ju Laroye on the Afro-Brazilian spirit guide named Eshu, of movement,
            decision, and change.
          </Lead>
        </Intro>

        <Stage {...revealOnScroll(80)}>
          <Devices
            src={courseMockups.devices}
            alt="Voice of Eshu on a laptop, phone, and tablet"
            width={933}
            height={521}
          />
          <Seal
            src={courseMockups.seal}
            alt="100% satisfaction guaranteed"
            width={232}
            height={244}
          />
        </Stage>

        <Action>
          <OfferLink href="#offer">Enroll from $197 to $97</OfferLink>
        </Action>
      </Container>
    </SectionShell>
  );
}
