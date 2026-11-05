import { Container, GoldText, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { heroImages } from "@/constants/assets";
import { BodyStack, Muted, SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Border, Grid, Image, ImageFrame, Quote } from "./styles";

export function PriestessSection() {
  return (
    <SectionShell $tone="card">
      <Container>
        <Grid>
          <ImageFrame {...revealOnScroll()}>
            <Border aria-hidden />
            <Image
              src={heroImages.priestess}
              alt="Priestess at an opening forest path"
              loading="lazy"
              width={1920}
              height={1088}
            />
          </ImageFrame>
          <div>
            <SectionEyebrow>Your Priestess</SectionEyebrow>
            <SectionTitle {...revealOnScroll(40)}>
              Iyá Ifagbemisola · <GoldText>Ju Laroye</GoldText>
            </SectionTitle>
            <BodyStack>
              <Muted {...revealOnScroll(80)}>
                Ju Laroye has been studying Afro-Brazilian spiritual traditions for more than 20
                years.
              </Muted>
              <Muted {...revealOnScroll(120)}>
                She is an ordained Priestess of Sacred Umbanda, initiated in Ifá and the Magic of
                Fire. She's also a professional conference interpreter, so when she explains the
                cosmology of the Orishas in English, nothing is lost in translation.
              </Muted>
              <Muted {...revealOnScroll(160)}>
                She created this course for a simple reason: every time she taught this material
                live, students said the same thing.{" "}
                <Quote>
                  "Why has no one ever explained this in a way that made sense before?"
                </Quote>
              </Muted>
              <Muted {...revealOnScroll(200)}>
                Her approach is educational, and she won't ask you to believe anything. She wants you
                to understand the history, the philosophy, and the cultural context first, and then
                decide for yourself what to do with it.
              </Muted>
            </BodyStack>
          </div>
        </Grid>
      </Container>
    </SectionShell>
  );
}
