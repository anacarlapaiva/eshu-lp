import styled from "styled-components";

export const Toggle = styled.button`
  display: inline-grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  transition:
    background 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
