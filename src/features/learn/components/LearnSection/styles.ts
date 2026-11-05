import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Layout = styled.div`
  display: grid;
  gap: 3rem;

  ${media.up("wide")} {
    grid-template-columns: minmax(16rem, 0.85fr) 1.3fr;
    gap: 5rem;
    align-items: start;
  }
`;

export const Intro = styled.div`
  ${media.up("wide")} {
    position: sticky;
    top: 6rem;
  }
`;

export const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Row = styled(motion.article)`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 0.75rem 1.25rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${media.up("tablet")} {
    grid-template-columns: 3rem 1fr;
    gap: 1.5rem;
    padding: 1.6rem 0;
  }
`;

export const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.accent};
  padding-top: 0.35rem;
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.05rem;
  line-height: 1.7;
`;
