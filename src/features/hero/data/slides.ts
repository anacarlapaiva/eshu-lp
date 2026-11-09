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
    eyebrow: "Voice of Eshu",
    title: createElement(
      "span",
      null,
      "Learn how to work with the spirit guide who ",
      createElement(GoldText, null, "clears blocks"),
      " and ",
      createElement(GoldText, null, "opens paths"),
    ),
    text: "A 13-lesson self-paced course with Priestess Iyá Ju Laroye on the Afro-Brazilian spirit guide named Eshu, of movement, decision, and change, and how to call on that energy in your own life.",
  },
  {
    img: heroImages.path,
    eyebrow: "Voice of Eshu",
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
    eyebrow: "Voice of Eshu",
    title: createElement(
      "span",
      null,
      "Understand the shadows. Make the decision. ",
      createElement(GoldText, null, "Set things in motion."),
    ),
    text: "Eshu is the spirit guide of movement, decision, and change, the guardian of the crossroads and of the choices that open a path.",
  },
];
