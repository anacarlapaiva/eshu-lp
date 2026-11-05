import { Quote as QuoteIconLucide } from "lucide-react";

import { Container } from "@/components";
import { revealOnScroll } from "@/animations";
import type { Testimonial } from "@/features/testimonials/data/quotes";
import { SectionShell } from "@/features/shared/sectionStyles";

import { Author, Card, Grid, Quote, QuoteIcon } from "./styles";

interface TestimonialsSectionProps {
  items: Testimonial[];
  tone?: "default" | "card";
}

export function TestimonialsSection({ items, tone = "card" }: TestimonialsSectionProps) {
  return (
    <SectionShell $tone={tone}>
      <Container>
        <Grid>
          {items.map((item, index) => (
            <Card key={item.author} {...revealOnScroll(index * 80)}>
              <QuoteIcon>
                <QuoteIconLucide aria-hidden />
              </QuoteIcon>
              <Quote>“{item.quote}”</Quote>
              <Author>{item.author}</Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionShell>
  );
}
