import styled, { keyframes } from "styled-components";

import { SectionEyebrow } from "@/components";
import { media } from "@/styles/media";

const progressFill = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 640px;
  overflow: hidden;

  ${media.down("tablet")} {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }
`;

export const SlideLayer = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1400ms ease;
  pointer-events: none;
`;

export const SlideImage = styled.img<{ $active: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${({ $active }) => ($active ? "kenburns 6s linear forwards" : "none")};
`;

export const GradientX = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.heroScrim};
`;

export const GradientY = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.heroScrimY};
`;

export const TopBar = styled.header`
  position: absolute;
  inset-inline: 0;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: ${({ theme }) => theme.layout.containerWide};
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;

  ${media.down("tablet")} {
    position: relative;
    flex-shrink: 0;
    align-items: flex-start;
    padding: calc(0.85rem + env(safe-area-inset-top)) 1.15rem 0;
  }
`;

export const Brand = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  ${media.down("tablet")} {
    max-width: 11.5rem;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    line-height: 1.35;
  }
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const TopCta = styled.a`
  display: none;
  align-items: center;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 0 1.25rem;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    background 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  ${media.up("tablet")} {
    display: inline-flex;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.containerWide};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ${media.down("tablet")} {
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    min-height: 0;
    height: auto;
    overflow-y: auto;
    padding: 0.25rem 1.15rem 0.35rem;

    &::before {
      content: "";
      flex: 1 1 0;
      min-height: 0.85rem;
    }
  }
`;

export const Copy = styled.div`
  max-width: 42rem;
  width: 100%;
`;

export const Rise = styled.div<{ $delay?: number }>`
  animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  animation-delay: ${({ $delay = 0 }) => `${$delay}ms`};
`;

export const HeroEyebrow = styled(SectionEyebrow)`
  ${media.down("tablet")} {
    display: block;
    width: 100%;
    margin-bottom: 0.7rem;
    font-size: clamp(0.72rem, 3.55vw, 0.875rem);
    letter-spacing: 0.14em;
    line-height: 1.4;
    text-wrap: balance;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.7rem, 7.4vw, 2.15rem);
  font-weight: 500;
  line-height: 1.08;
  text-wrap: balance;

  ${media.up("tablet")} {
    font-size: 3.75rem;
    line-height: 1.02;
  }

  ${media.up("wide")} {
    font-size: 4.5rem;
  }
`;

export const Lead = styled.p`
  margin: 1.5rem 0 0;
  max-width: 36rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.125rem;
  line-height: 1.6;

  ${media.down("tablet")} {
    margin-top: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.45;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

  ${media.down("tablet")} {
    gap: 0.55rem;
    margin-top: 1rem;
  }

  ${media.up("tablet")} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Guarantee = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;

  ${media.down("tablet")} {
    font-size: 0.78rem;
    line-height: 1.4;
  }
`;

export const OfferLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  line-height: 1.15;
  text-align: left;
`;

export const OfferLine = styled.span`
  ${media.up("phone")} {
    white-space: nowrap;
  }
`;

export const OfferNote = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  opacity: 0.9;

  ${media.up("phone")} {
    white-space: nowrap;
  }
`;

export const Controls = styled.div`
  position: absolute;
  right: 0;
  bottom: 2rem;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layout.containerWide};
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ${media.down("tablet")} {
    position: relative;
    bottom: auto;
    flex-shrink: 0;
    padding: 0.75rem 1.15rem calc(0.85rem + env(safe-area-inset-bottom));
  }
`;

export const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DotButton = styled.button<{ $active: boolean; $paused: boolean }>`
  position: relative;
  width: 2rem;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.track};

  ${media.up("tablet")} {
    width: 2.75rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    transform-origin: left center;
    background: ${({ theme }) => theme.colors.accent};
    animation: ${({ $active }) => ($active ? progressFill : "none")} 6s linear forwards;
    animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
  }
`;

export const Arrows = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ArrowButton = styled.button`
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;

  ${media.up("tablet")} {
    width: 2.75rem;
    height: 2.75rem;
  }
  border: 1px solid ${({ theme }) => theme.colors.controlBorder};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ theme }) => theme.colors.controlBg};
  backdrop-filter: blur(8px);
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.controlBgHover};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ScrollHint = styled.div`
  position: absolute;
  bottom: 5.5rem;
  left: 50%;
  z-index: 20;
  display: none;
  place-items: center;

  ${media.up("tablet")} {
    display: grid;
  }
  color: ${({ theme }) => theme.colors.accent};
  transform: translateX(-50%);
  animation: rise 1.2s ease 1s both;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
