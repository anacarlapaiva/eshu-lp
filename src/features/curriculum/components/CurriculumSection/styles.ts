import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Intro = styled.div`
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
`;

export const Lead = styled.p`
  margin: 1.5rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.125rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  ${media.up("desktop")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 2.5rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}80;
  }
`;

export const Giant = styled.span`
  pointer-events: none;
  position: absolute;
  top: -2rem;
  right: -1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 10rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryGhost};
`;

export const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  margin: 1rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 500;
`;

export const Body = styled.p`
  margin: 1rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
`;

export const Board = styled.div`
  display: grid;
  gap: 3.5rem;
  margin-top: 4.5rem;

  ${media.up("desktop")} {
    grid-template-columns: 1fr 1fr;
    gap: 4rem 5rem;
    align-items: start;
  }
`;

export const PartHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PartLabel = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
`;

export const PartName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
`;

export const Lesson = styled.article`
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 0.85rem;
  padding: 1.15rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LessonIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.accent};
  padding-top: 0.15rem;
`;

export const LessonTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const LessonBody = styled.p`
  margin: 0.4rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.95rem;
  line-height: 1.65;
`;
