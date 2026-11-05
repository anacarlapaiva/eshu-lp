import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Intro = styled.div`
  max-width: 42rem;
  margin-bottom: 4rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.border};

  ${media.up("desktop")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
  }
`;

export const Number = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primarySoftText};
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Text = styled.p`
  margin: 1rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;
