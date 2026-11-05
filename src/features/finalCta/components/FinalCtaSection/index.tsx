import { EmberField, EnrollButton, GoldText } from "@/components";
import { revealOnScroll } from "@/animations";

import { Content, Glow, Lead, Section, Title } from "./styles";

export function FinalCtaSection() {
  return (
    <Section>
      <Glow aria-hidden />
      <EmberField />
      <Content {...revealOnScroll()}>
        <Title>
          The crossroads has always had a guardian. <GoldText>Now you can meet him.</GoldText>
        </Title>
        <Lead>Voice of Eshu · $97 through November 27th · Instant access</Lead>
        <EnrollButton variant="cta">Enroll Now</EnrollButton>
      </Content>
    </Section>
  );
}
