import styled from "styled-components";

import { media } from "@/styles/media";

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem ${({ theme }) => theme.layout.gutter};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;

  ${media.down("desktop")} {
    padding-bottom: calc(3rem + 5.6rem + env(safe-area-inset-bottom));
  }
`;

export const Inner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

export const Mark = styled.img`
  display: block;
  width: min(100%, 46rem);
  height: auto;
  margin: 0 auto 2.5rem;
`;

export const Title = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Line = styled.p`
  margin: 1rem 0 0;
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

export const Small = styled.p`
  margin: 1rem 0 0;
  font-size: 0.75rem;
  line-height: 1.7;
`;
