import styled from "styled-components";

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;
