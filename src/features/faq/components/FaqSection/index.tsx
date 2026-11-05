import { Plus } from "lucide-react";

import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { faqItems } from "@/features/faq/data/faqItems";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import { Answer, Content, Header, Intro, Item, List, Trigger, Wrap } from "./styles";

export function FaqSection() {
  return (
    <SectionShell>
      <Container>
        <Wrap>
          <Intro>
            <SectionEyebrow>FAQ</SectionEyebrow>
            <SectionTitle {...revealOnScroll()}>Frequently Asked Questions</SectionTitle>
          </Intro>
          <List type="single" collapsible defaultValue={faqItems[0].question}>
            {faqItems.map((item) => (
              <Item key={item.question} value={item.question}>
                <Header>
                  <Trigger>
                    {item.question}
                    <Plus aria-hidden />
                  </Trigger>
                </Header>
                <Content>
                  <Answer>{item.answer}</Answer>
                </Content>
              </Item>
            ))}
          </List>
        </Wrap>
      </Container>
    </SectionShell>
  );
}
