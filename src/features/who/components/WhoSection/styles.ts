import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Grid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  ${media.up("wide")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageWrap = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: slow-zoom 18s ease-in-out infinite;
`;

export const Ring = styled.div`
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.accent}4d;
  border-radius: inherit;
  pointer-events: none;
`;

export const Frame = styled(motion.p)`
  margin: 0;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 1.125rem;
  line-height: 1.7;
`;
