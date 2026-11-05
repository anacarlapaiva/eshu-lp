import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

import { media } from "@/styles/media";

export const Wrap = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const Intro = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

export const List = styled(Accordion.Root)`
  border-block: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Item = styled(Accordion.Item)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Header = styled(Accordion.Header)`
  margin: 0;
`;

export const Trigger = styled(Accordion.Trigger)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 0;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 500;

  ${media.up("tablet")} {
    font-size: 1.5rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.accent};
    transition: transform 0.3s ease;
  }

  &[data-state="open"] svg {
    transform: rotate(45deg);
  }
`;

export const Content = styled(Accordion.Content)`
  overflow: hidden;

  &[data-state="open"] {
    animation: slideDown 0.35s ease;
  }

  &[data-state="closed"] {
    animation: slideUp 0.25s ease;
  }

  @keyframes slideDown {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }
`;

export const Answer = styled.p`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
`;
