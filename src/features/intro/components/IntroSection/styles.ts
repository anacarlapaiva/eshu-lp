import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Wrap = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

export const Lead = styled(motion.p)`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.45rem, 6.2vw, 1.75rem);
  line-height: 1.35;

  ${media.up("tablet")} {
    font-size: clamp(1.875rem, 3vw, 2.25rem);
  }
`;

export const Sub = styled(motion.p)`
  margin: 2.5rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.25rem;
  line-height: 1.7;
`;

export const EshuWord = styled(motion.p)`
  margin: 2rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.25rem, 18vw, 4.5rem);
  font-weight: 600;
  letter-spacing: 0.12em;

  ${media.up("tablet")} {
    margin-top: 2.5rem;
    font-size: 6rem;
    letter-spacing: 0.2em;
  }
`;

export const Closing = styled(motion.p)`
  margin: 2rem 0 0;
  font-size: 1.125rem;
  line-height: 1.7;
`;
