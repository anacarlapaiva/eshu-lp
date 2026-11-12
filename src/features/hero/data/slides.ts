import type { ReactNode } from "react";
import { createElement } from "react";

import { GoldText } from "@/components";
import { heroImages } from "@/constants/assets";

export interface HeroSlide {
  img: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
}

export const heroSlides: HeroSlide[] = [
  {
    img: heroImages.crossroads,
    eyebrow: "Eshu: The Guardian at the Crossroads",
    title: createElement(
      "span",
      null,
      "Learn how to work with Eshu to ",
      createElement(GoldText, null, "clear blocks"),
      " and ",
      createElement(GoldText, null, "open paths"),
    ),
    text: "A 13-lesson self-paced course with Priestess Iyá Ju Laroye on the Afro-Brazilian guardian of movement, decision, and change and how to call on that energy in your own life.",
  },
  {
    img: heroImages.path,
    eyebrow: "Eshu: The Guardian at the Crossroads",
    title: createElement(
      "span",
      null,
      "Build your first ",
      createElement(GoldText, null, "firmeza"),
    ),
    text: "A traditional Umbanda ritual of connection with Eshu, with clear, step-by-step guidance on the materials, the prayer, and the meaning behind each element.",
  },
  {
    img: heroImages.priestess,
    eyebrow: "Eshu: The Guardian at the Crossroads",
    title: createElement(
      "span",
      null,
      "Understand the shadows. Make the decision. ",
      createElement(GoldText, null, "Set things in motion."),
    ),
    text: "Eshu is the Guardian of movement, decision, and change, the guardian of the crossroads and of the choices that open a path.",
  },
];
