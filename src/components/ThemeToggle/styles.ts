import styled from "styled-components";

export const Toggle = styled.button`
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.foreground};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
