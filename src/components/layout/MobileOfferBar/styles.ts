import styled from "styled-components";

import { media } from "@/styles/media";

export const Bar = styled.aside<{ $visible: boolean }>`
  display: none;

  ${media.down("desktop")} {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 40;
    display: grid;
    grid-template-columns: 4.75rem minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem;
    min-height: calc(5.4rem + env(safe-area-inset-bottom));
    padding: 0.55rem 0.9rem calc(0.55rem + env(safe-area-inset-bottom));
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.card};
    box-shadow: 0 -10px 30px rgb(0 0 0 / 0.28);
    transform: translateY(${({ $visible }) => ($visible ? "0" : "110%")});
    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
    transition: transform 0.35s ease;
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 4.4rem;
  object-fit: contain;
`;

export const Offer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.15rem 0.75rem;
`;

export const Price = styled.p`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin: 0;
  grid-column: 1;
  grid-row: 1;
`;

export const Old = styled.s`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.8rem;
`;

export const New = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.85rem;
  font-weight: 600;
  line-height: 1;
  background: ${({ theme }) => theme.colors.goldGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Note = styled.span`
  grid-column: 1;
  grid-row: 2;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Cta = styled.a`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.55rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.emberGradient};
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
`;
