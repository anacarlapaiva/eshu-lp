import styled from "styled-components";

export const Em = styled.em<{ $italic: boolean }>`
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  background: ${({ theme }) => theme.colors.goldGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
