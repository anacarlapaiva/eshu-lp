import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  ${media.up("desktop")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled(motion.figure)`
  position: relative;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  transition:
    transform 0.5s ease,
    border-color 0.5s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent}80;
  }
`;

export const QuoteIcon = styled.div`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Quote = styled.blockquote`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-style: italic;
  line-height: 1.5;
`;

export const Author = styled.figcaption`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
