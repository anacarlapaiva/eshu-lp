const base = import.meta.env.BASE_URL;

export const heroImages = {
  crossroads: `${base}images/hero-1.jpg`,
  path: `${base}images/hero-2.jpg`,
  priestess: `${base}images/hero-3.jpg`,
} as const;

export const portraits = {
  ju: `${base}images/ju-portrait.jpg`,
} as const;

export const courseMockups = {
  devices: `${base}images/course-devices.png?v=2`,
  seal: `${base}images/guarantee-seal.png`,
  footer: `${base}images/footer-mark.png`,
} as const;
