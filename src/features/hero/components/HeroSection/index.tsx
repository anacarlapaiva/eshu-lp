import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { EmberField, EnrollButton, SectionEyebrow, ThemeToggle } from "@/components";
import { enrollLinkProps } from "@/constants/links";
import { heroSlides } from "@/features/hero/data/slides";

import {
  ArrowButton,
  Arrows,
  Brand,
  Content,
  Controls,
  Copy,
  CtaRow,
  DotButton,
  Dots,
  GradientX,
  GradientY,
  Guarantee,
  Lead,
  Rise,
  ScrollHint,
  Section,
  SlideImage,
  SlideLayer,
  Title,
  TopActions,
  TopBar,
  TopCta,
} from "./styles";

const SLIDE_MS = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);
  const slide = heroSlides[index];

  const goTo = (next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => goTo(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  return (
    <Section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => {
        touchX.current = event.touches[0]?.clientX ?? 0;
      }}
      onTouchEnd={(event) => {
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (Math.abs(delta) > 50) goTo(delta < 0 ? index + 1 : index - 1);
      }}
    >
      {heroSlides.map((item, slideIndex) => (
        <SlideLayer key={item.eyebrow} $active={slideIndex === index} aria-hidden={slideIndex !== index}>
          <SlideImage
            src={item.img}
            alt=""
            width={1920}
            height={1088}
            $active={slideIndex === index}
            fetchPriority={slideIndex === 0 ? "high" : "auto"}
          />
        </SlideLayer>
      ))}

      <GradientX aria-hidden />
      <GradientY aria-hidden />
      <EmberField />

      <TopBar>
        <Brand>Escola do Pentagrama</Brand>
        <TopActions>
          <ThemeToggle />
          <TopCta {...enrollLinkProps}>Black Friday · $97</TopCta>
        </TopActions>
      </TopBar>

      <Content>
        <Copy key={slide.eyebrow}>
          <Rise>
            <SectionEyebrow>{slide.eyebrow}</SectionEyebrow>
          </Rise>
          <Rise $delay={120}>
            <Title>{slide.title}</Title>
          </Rise>
          <Rise $delay={240}>
            <Lead>{slide.text}</Lead>
          </Rise>
          <Rise $delay={360}>
            <CtaRow>
              <EnrollButton>
                Enroll from <s>$197</s> to $97
              </EnrollButton>
              <Guarantee>Instant access · 7-day money-back guarantee</Guarantee>
            </CtaRow>
          </Rise>
        </Copy>
      </Content>

      <ScrollHint aria-hidden>
        <ChevronDown />
      </ScrollHint>

      <Controls>
        <Dots>
          {heroSlides.map((item, slideIndex) => (
            <DotButton
              key={`${item.eyebrow}-${slideIndex === index ? index : "idle"}-${paused}`}
              type="button"
              aria-label={`Slide ${slideIndex + 1}`}
              $active={slideIndex === index}
              $paused={paused}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </Dots>
        <Arrows>
          <ArrowButton type="button" aria-label="Previous" onClick={() => goTo(index - 1)}>
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton type="button" aria-label="Next" onClick={() => goTo(index + 1)}>
            <ChevronRight />
          </ArrowButton>
        </Arrows>
      </Controls>
    </Section>
  );
}
