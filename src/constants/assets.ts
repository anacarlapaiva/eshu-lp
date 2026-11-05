const base = import.meta.env.BASE_URL;

export const heroImages = {
  crossroads: `${base}images/hero-1.jpg`,
  path: `${base}images/hero-2.jpg`,
  priestess: `${base}images/hero-3.jpg`,
} as const;

export const portraits = {
  ju: `${base}images/ju-portrait.jpg`,
  altar: `${base}images/ju-altar.jpg`,
} as const;
