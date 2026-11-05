import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const SectionShell = styled.section<{ $tone?: "default" | "card" }>`
  position: relative;
  padding: 3.75rem ${({ theme }) => theme.layout.gutter};
  background: ${({ theme, $tone }) =>
    $tone === "card" ? theme.colors.card : theme.colors.background};

  ${media.up("tablet")} {
    padding-block: 6rem;
  }

  ${media.up("wide")} {
    padding-block: 8rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.85rem, 8vw, 2.35rem);
  font-weight: 500;
  line-height: 1.15;
  text-wrap: balance;

  ${media.up("tablet")} {
    font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  }
`;

export const Muted = styled(motion.p)`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.125rem;
  line-height: 1.7;
`;

export const BodyStack = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
`;
