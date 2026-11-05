import type { ReactNode } from "react";

import { Eyebrow, Rule } from "./styles";

interface SectionEyebrowProps {
  children: ReactNode;
  withRule?: boolean;
  className?: string;
}

export function SectionEyebrow({ children, withRule = false, className }: SectionEyebrowProps) {
  return (
    <Eyebrow className={className}>
      {withRule ? <Rule aria-hidden /> : null}
      {children}
    </Eyebrow>
  );
}
