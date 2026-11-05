import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

import { mainContentId } from "@/constants/links";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const focusWithoutScrolling = (element: HTMLElement) => {
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
};

export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const initialKeyRef = useRef(key);

  useEffect(() => {
    const isInitialLocation = key === initialKeyRef.current;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      const mainContent = document.getElementById(mainContentId);
      if (!isInitialLocation && mainContent) focusWithoutScrolling(mainContent);
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    target.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth" });
    if (!isInitialLocation) focusWithoutScrolling(target);
  }, [pathname, hash, key]);

  return null;
}
