import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { outcomes } from "@/features/learn/data/outcomes";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Intro, Layout, List, Number, Row, Text } from "./styles";

export function LearnSection() {
  return (
    <SectionShell>
      <Container>
        <Layout>
          <Intro>
            <SectionEyebrow>What you'll learn</SectionEyebrow>
            <SectionTitle {...revealOnScroll()}>By the end of this course, you will:</SectionTitle>
          </Intro>
          <List>
            {outcomes.map((outcome, index) => (
              <Row key={outcome} {...revealOnScroll(index * 40)}>
                <Number>{String(index + 1).padStart(2, "0")}</Number>
                <Text>{outcome}</Text>
              </Row>
            ))}
          </List>
        </Layout>
      </Container>
    </SectionShell>
  );
}
