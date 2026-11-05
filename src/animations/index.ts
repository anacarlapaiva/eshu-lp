import { easings } from "@/styles/themes";

export const revealOnScroll = (delayMs = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.9,
    ease: easings.smooth,
    delay: delayMs / 1000,
  },
});
