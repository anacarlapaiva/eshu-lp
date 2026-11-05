import styled from "styled-components";

import { media } from "@/styles/media";

export const Band = styled.div`
  overflow: hidden;
  border-block: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  padding-block: 1rem;
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 3rem;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;

  ${media.up("tablet")} {
    font-size: 1.5rem;
  }
  font-style: italic;
  color: ${({ theme }) => theme.colors.mutedForeground};
  animation: marquee 40s linear infinite;
`;

export const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3rem;
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
