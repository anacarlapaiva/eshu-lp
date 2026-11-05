import { Check, Gift } from "lucide-react";

import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { bonuses, inclusions } from "@/features/included/data/inclusions";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import {
  BonusCard,
  BonusGrid,
  BonusHead,
  BonusLabel,
  BonusPrice,
  Card,
  CardBody,
  CardTitle,
  Grid,
  Intro,
} from "./styles";

export function IncludedSection() {
  return (
    <SectionShell>
      <Container>
        <Intro>
          <SectionEyebrow>Inside the course</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>Everything Included in Voice of Eshu</SectionTitle>
        </Intro>

        <Grid>
          {inclusions.map((item, index) => (
            <Card key={item.title} {...revealOnScroll(index * 70)}>
              <Check aria-hidden />
              <CardTitle>{item.title}</CardTitle>
              <CardBody>{item.body}</CardBody>
            </Card>
          ))}
        </Grid>

        <BonusGrid>
          {bonuses.map((bonus, index) => (
            <BonusCard key={bonus.title} {...revealOnScroll(index * 80)}>
              <BonusHead>
                <BonusLabel>
                  <Gift aria-hidden /> Bonus {index + 1}
                </BonusLabel>
                <BonusPrice>
                  <s>{bonus.price}</s> <strong>FREE</strong>
                </BonusPrice>
              </BonusHead>
              <CardTitle>{bonus.title}</CardTitle>
              <CardBody>{bonus.body}</CardBody>
            </BonusCard>
          ))}
        </BonusGrid>
      </Container>
    </SectionShell>
  );
}
