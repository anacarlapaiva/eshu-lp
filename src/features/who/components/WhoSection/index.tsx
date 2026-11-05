import { Container, GoldText, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { heroImages } from "@/constants/assets";
import { BodyStack, Muted, SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Frame, Grid, Image, ImageWrap, Ring } from "./styles";

export function WhoSection() {
  return (
    <SectionShell $tone="card">
      <Container>
        <Grid>
          <ImageWrap {...revealOnScroll()}>
            <Image
              src={heroImages.crossroads}
              alt="A crossroads at night lit by red candles"
              loading="lazy"
              width={1920}
              height={1088}
            />
            <Ring aria-hidden />
          </ImageWrap>
          <div>
            <SectionEyebrow>Who is Eshu</SectionEyebrow>
            <SectionTitle {...revealOnScroll(40)}>
              The force that stands at <GoldText>every crossroads</GoldText>
            </SectionTitle>
            <BodyStack>
              <Muted {...revealOnScroll(80)}>
                In the Afro-Brazilian tradition called Sacred Umbanda, there is a spirit guide named
                Eshu.
              </Muted>
              <Muted {...revealOnScroll(120)}>
                He's the force that stands at every crossroads. The one who governs movement,
                communication, and choice. When something is blocked, he's the one with the key. When
                a path opens, he's the one who opened it.
              </Muted>
              <Muted {...revealOnScroll(160)}>
                Similar guides appear across traditions, as Elegba in West Africa, as Legba in Haiti,
                as Eleguá in Cuba. The names change, but the presence is the same: the guardian of thresholds, the
                first to be honored before any spiritual work begins.
              </Muted>
              <Frame {...revealOnScroll(200)}>
                For centuries, colonial missionaries described him as a devil figure. In this course,
                you will learn who he really is.
              </Frame>
            </BodyStack>
          </div>
        </Grid>
      </Container>
    </SectionShell>
  );
}
