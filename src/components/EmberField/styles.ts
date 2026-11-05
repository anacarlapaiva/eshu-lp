import styled from "styled-components";

export const Field = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

export const Dot = styled.span`
  position: absolute;
  bottom: -10px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
  animation-name: ember;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
