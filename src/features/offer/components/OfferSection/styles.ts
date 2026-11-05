import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 7rem ${({ theme }) => theme.layout.gutter};
`;

export const Bg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.offerScrim};
`;

export const Card = styled(motion.div)`
  position: relative;
  max-width: ${({ theme }) => theme.layout.containerOffer};
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.cardGlass};
  padding: 2.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  backdrop-filter: blur(12px);

  ${media.up("tablet")} {
    padding: 3.5rem;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.emberGradient};
  padding: 0.25rem 1rem;
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 1.5rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.25rem, 4vw, 3rem);
  font-weight: 500;
`;

export const Copy = styled.p`
  margin: 1rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
`;

export const Prices = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const OldPrice = styled.s`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const NewPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 6rem;
  font-weight: 600;
  line-height: 1;
  background: ${({ theme }) => theme.colors.goldGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Perks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
`;

export const Perk = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
