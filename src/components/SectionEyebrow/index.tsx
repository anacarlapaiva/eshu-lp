import type { ReactNode } from "react";

import { Eyebrow } from "./styles";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return <Eyebrow className={className}>{children}</Eyebrow>;
}
