import { motion } from "motion/react";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Intro = styled.div`
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  ${media.up("desktop")} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.up("wide")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent}80;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CardTitle = styled.h3`
  margin: 1.25rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CardBody = styled.p`
  margin: 0.75rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
`;

export const BonusGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 5rem;

  ${media.up("wide")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BonusCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primaryMuted};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(${({ theme }) => theme.colors.primarySoft}, transparent);
  padding: 2rem;
`;

export const BonusHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const BonusLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const BonusPrice = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;

  s {
    margin-right: 0.25rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;
