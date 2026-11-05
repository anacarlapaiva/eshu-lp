import { Container, GoldText, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { portraits } from "@/constants/assets";
import { BodyStack, Muted, SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Border, Caption, Grid, Image, ImageFrame, Quote, Secondary } from "./styles";

export function PriestessSection() {
  return (
    <SectionShell $tone="card">
      <Container>
        <Grid>
          <ImageFrame {...revealOnScroll()}>
            <Border aria-hidden />
            <Image
              src={portraits.ju}
              alt="Iyá Ju Laroye smiling, hands together in greeting"
              loading="lazy"
              width={1280}
              height={720}
            />
            <Secondary
              src={portraits.altar}
              alt="Iyá Ju Laroye in front of a wall of sacred statues"
              loading="lazy"
              width={800}
              height={1000}
            />
          </ImageFrame>
          <div>
            <SectionEyebrow>Your Priestess</SectionEyebrow>
            <SectionTitle {...revealOnScroll(40)}>
              Iyá Ifagbemisola · <GoldText>Ju Laroye</GoldText>
            </SectionTitle>
            <BodyStack>
              <Muted {...revealOnScroll(80)}>
                Ju Laroye founded Escola do Pentagrama. She has been studying Afro-Brazilian
                spiritual traditions for more than 20 years, and she is the voice in every lesson.
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
              <Caption>Priestess and founder of Escola do Pentagrama.</Caption>
            </BodyStack>
          </div>
        </Grid>
      </Container>
    </SectionShell>
  );
}
