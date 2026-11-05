import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Intro = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
`;

export const Lead = styled.p`
  margin: 1.25rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.125rem;
  line-height: 1.7;
`;

export const Stage = styled(motion.div)`
  position: relative;
  width: min(100%, 62rem);
  margin: 2.5rem auto 0;
`;

export const Devices = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Seal = styled.img`
  position: absolute;
  right: 0;
  bottom: 2%;
  width: clamp(5.25rem, 16vw, 8.25rem);
  height: auto;
  filter: drop-shadow(0 12px 18px rgb(0 0 0 / 0.4));
  pointer-events: none;

  ${media.down("tablet")} {
    right: -0.25rem;
    bottom: 0;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.25rem;
`;

export const OfferLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.emberGradient};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: 600;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
