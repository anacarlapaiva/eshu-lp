import styled from "styled-components";

export type ContainerWidth = "wide" | "content" | "narrow" | "offer";

const maxWidthByVariant = {
  wide: "containerWide",
  content: "containerContent",
  narrow: "containerNarrow",
  offer: "containerOffer",
} as const;

export const StyledContainer = styled.div<{ $width: ContainerWidth }>`
  width: 100%;
  max-width: ${({ theme, $width }) => theme.layout[maxWidthByVariant[$width]]};
  margin: 0 auto;
`;
