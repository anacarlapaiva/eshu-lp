export const breakpoints = {
  phone: 480,
  tablet: 640,
  desktop: 768,
  wide: 1024,
  max: 1280,
} as const;

type Breakpoint = keyof typeof breakpoints;

export const media = {
  up: (breakpoint: Breakpoint) => `@media (min-width: ${breakpoints[breakpoint]}px)`,
  down: (breakpoint: Breakpoint) => `@media (max-width: ${breakpoints[breakpoint] - 0.02}px)`,
};
