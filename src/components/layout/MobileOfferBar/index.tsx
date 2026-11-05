import { useEffect, useState } from "react";

import { courseMockups } from "@/constants/assets";
import { enrollLinkProps } from "@/constants/links";

import { Bar, Cta, New, Note, Offer, Old, Price, Thumb } from "./styles";

export function MobileOfferBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      const heroStillVisible = entry.isIntersecting || entry.boundingClientRect.bottom > 0;
      setVisible(!heroStillVisible);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Bar $visible={visible} aria-label="Black Friday offer" aria-hidden={!visible}>
      <Thumb src={courseMockups.seal} alt="" />
      <Offer>
        <Price>
          <Old>$197</Old>
          <New>$97</New>
        </Price>
        <Note>Black Friday</Note>
        <Cta {...enrollLinkProps} tabIndex={visible ? 0 : -1}>
          Enroll now
        </Cta>
      </Offer>
    </Bar>
  );
}
