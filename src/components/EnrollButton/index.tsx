import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { enrollLinkProps } from "@/constants/links";

import { Button } from "./styles";

interface EnrollButtonProps {
  children: ReactNode;
  variant?: "hero" | "block" | "cta";
  className?: string;
}

export function EnrollButton({ children, variant = "hero", className }: EnrollButtonProps) {
  return (
    <Button {...enrollLinkProps} $variant={variant} className={className}>
      {children}
      <ChevronRight aria-hidden />
    </Button>
  );
}
