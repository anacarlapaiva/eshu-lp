import { motion } from "motion/react";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem ${({ theme }) => theme.layout.gutter};
  text-align: center;
`;

export const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primaryMuted};
  filter: blur(64px);
  transform: translate(-50%, -50%);
`;

export const Content = styled(motion.div)`
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3rem, 6vw, 3.75rem);
  font-weight: 500;
  line-height: 1.15;
`;

export const Lead = styled.p`
  margin: 1.5rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
