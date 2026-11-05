import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { outcomes } from "@/features/learn/data/outcomes";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Intro, Layout, Lead, List, Number, Row, Text, Title } from "./styles";

export function LearnSection() {
  return (
    <SectionShell>
      <Container>
        <Layout>
          <Intro>
            <SectionEyebrow>What you'll learn</SectionEyebrow>
            <SectionTitle {...revealOnScroll()}>By the end of this course, you will</SectionTitle>
            <Lead>
              Seven things you leave with, from the names of the traditions to the first ritual in
              your home.
            </Lead>
          </Intro>
          <List>
            {outcomes.map((outcome, index) => (
              <Row key={outcome.index} {...revealOnScroll(index * 40)}>
                <Number>{outcome.index}</Number>
                <div>
                  <Title>{outcome.title}</Title>
                  <Text>{outcome.body}</Text>
                </div>
              </Row>
            ))}
          </List>
        </Layout>
      </Container>
    </SectionShell>
  );
}
