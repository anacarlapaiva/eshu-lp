import type { ReactNode } from "react";

import { Em } from "./styles";

interface GoldTextProps {
  children: ReactNode;
  italic?: boolean;
}

export function GoldText({ children, italic = false }: GoldTextProps) {
  return <Em $italic={italic}>{children}</Em>;
}
