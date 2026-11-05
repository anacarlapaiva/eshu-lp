import styled, { css } from "styled-components";

import { media } from "@/styles/media";

export const Button = styled.a<{ $variant: "hero" | "block" | "cta" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.emberGradient};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: 600;
  transition:
    transform 0.25s ease,
    filter 0.25s ease;

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.25s ease;
  }

  &:hover {
    svg {
      transform: translateX(4px);
    }
  }

  s {
    opacity: 0.6;
  }

  ${({ $variant }) =>
    $variant === "hero" &&
    css`
      padding: 1rem 2rem;

      &:hover {
        transform: scale(1.03);
      }

      ${media.down("tablet")} {
        width: 100%;
        justify-content: space-between;
        padding: 0.85rem 1.15rem;
        font-size: 0.95rem;

        &:hover {
          transform: none;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === "block" &&
    css`
      width: 100%;
      margin-top: 2.5rem;
      padding: 1.25rem 2rem;
      font-size: 1.125rem;

      &:hover {
        transform: scale(1.02);
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}

  ${({ $variant }) =>
    $variant === "cta" &&
    css`
      margin-top: 2rem;
      padding: 1rem 1.75rem;
      font-size: 1rem;

      ${media.up("tablet")} {
        margin-top: 2.5rem;
        padding: 1.25rem 2.5rem;
        font-size: 1.125rem;
      }

      &:hover {
        transform: scale(1.05);
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`;
