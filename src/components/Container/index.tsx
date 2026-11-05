import type { HTMLAttributes } from "react";

import { StyledContainer, type ContainerWidth } from "./styles";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
}

export function Container({ width = "content", ...props }: ContainerProps) {
  return <StyledContainer $width={width} {...props} />;
}
