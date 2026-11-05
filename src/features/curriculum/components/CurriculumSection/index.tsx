import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { curriculumParts } from "@/features/curriculum/data/parts";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Body, Card, Giant, Grid, Intro, Label, Lead, Title } from "./styles";

export function CurriculumSection() {
  return (
    <SectionShell>
      <Container>
        <Intro>
          <SectionEyebrow>Curriculum</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>What You'll Cover</SectionTitle>
          <Lead>The course runs in two parts.</Lead>
        </Intro>
        <Grid>
          {curriculumParts.map((part, index) => (
            <Card key={part.label} {...revealOnScroll(index * 100)}>
              <Giant aria-hidden>{part.roman}</Giant>
              <Label>{part.label}</Label>
              <Title>{part.title}</Title>
              <Body>{part.body}</Body>
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionShell>
  );
}
