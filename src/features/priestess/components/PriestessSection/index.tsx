import { Container, GoldText, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { portraits } from "@/constants/assets";
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
              src={portraits.ju}
              alt="Iyá Ju Laroye smiling, hands together in greeting"
              loading="lazy"
              width={1280}
              height={720}
            />
          </ImageFrame>
          <div>
            <SectionEyebrow>Who is your Priestess</SectionEyebrow>
            <SectionTitle {...revealOnScroll(40)}>
              Iyá Ifagbemisola — <GoldText>Ju Laroye</GoldText>
            </SectionTitle>
            <BodyStack>
              <Muted {...revealOnScroll(80)}>
                Ju Laroye has been studying Afro-Brazilian spiritual traditions for more than 20
                years.
              </Muted>
              <Muted {...revealOnScroll(120)}>
                She is an ordained Priestess of Sacred Umbanda, initiated in Ifá and the Magic of
                Fire. She's also a professional conference interpreter, which means when she explains
                the cosmology of the Orishas to English-speaking students, she's not just translating
                words. She's translating worlds.
              </Muted>
              <Muted {...revealOnScroll(160)}>
                She created this course for a simple reason: every time she taught this material
                live, students said the same thing.{" "}
                <Quote>
                  "Why has no one ever explained this in a way that made sense before?"
                </Quote>
              </Muted>
              <Muted {...revealOnScroll(180)}>That question is why this course exists.</Muted>
              <Muted {...revealOnScroll(200)}>
                Her approach is not devotional. She doesn't ask you to believe anything. She asks you
                to understand the history, the philosophy, the cultural context, before you decide
                what to do with it. That respect for your autonomy is intentional. It's also rare.
              </Muted>
            </BodyStack>
          </div>
        </Grid>
      </Container>
    </SectionShell>
  );
}
