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
    text: "A 13-lesson self-paced course with Priestess Iyá Ju Laroye on the Afro-Brazilian spirit guide of movement, decision, and change.",
  },
  {
    img: heroImages.path,
    eyebrow: "The Firmeza",
    title: createElement(
      "span",
      null,
      "Build your first ritual of ",
      createElement(GoldText, null, "connection"),
    ),
    text: "Candle, prayer, and meaning. Clear guidance from Sacred Umbanda, explained before you light the flame.",
  },
  {
    img: heroImages.priestess,
    eyebrow: "The Crossroads",
    title: createElement(
      "span",
      null,
      "Stop circling the same ",
      createElement(GoldText, null, "crossroads"),
    ),
    text: "Understand your shadows, make the decision, and set your life in motion with the guardian of every threshold.",
  },
];
