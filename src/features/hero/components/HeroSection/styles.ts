import styled, { keyframes } from "styled-components";

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
`;

export const Brand = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
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
`;

export const Copy = styled.div`
  max-width: 42rem;
`;

export const Rise = styled.div<{ $delay?: number }>`
  animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  animation-delay: ${({ $delay = 0 }) => `${$delay}ms`};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.02;

  ${media.up("tablet")} {
    font-size: 3.75rem;
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
`;

export const CtaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

  ${media.up("tablet")} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Guarantee = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
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
  white-space: nowrap;
`;

export const OfferNote = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  opacity: 0.9;
  white-space: nowrap;
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
`;

export const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DotButton = styled.button<{ $active: boolean; $paused: boolean }>`
  position: relative;
  width: 2.75rem;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.track};

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
  width: 2.75rem;
  height: 2.75rem;
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
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent};
  transform: translateX(-50%);
  animation: rise 1.2s ease 1s both;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
