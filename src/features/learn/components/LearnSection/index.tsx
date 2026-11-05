import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { outcomes } from "@/features/learn/data/outcomes";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Card, Grid, Intro, Number, Text } from "./styles";

export function LearnSection() {
  return (
    <SectionShell>
      <Container>
        <Intro>
          <SectionEyebrow>What you'll learn</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>By the end of this course, you will:</SectionTitle>
        </Intro>
        <Grid>
          {outcomes.map((outcome, index) => (
            <Card key={outcome} {...revealOnScroll(index * 60)}>
              <Number>{String(index + 1).padStart(2, "0")}</Number>
              <Text>{outcome}</Text>
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionShell>
  );
}
