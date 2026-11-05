import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Grid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  ${media.up("wide")} {
    grid-template-columns: 1fr 1.2fr;
  }
`;

export const ImageFrame = styled(motion.div)`
  position: relative;
`;

export const Border = styled.div`
  position: absolute;
  inset: -1rem;
  border: 1px solid ${({ theme }) => theme.colors.accent}4d;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Image = styled.img`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: left;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Quote = styled.em`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.foreground};
`;
