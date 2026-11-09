import { courseMockups } from "@/constants/assets";

import { Footer, Inner, Line, Mark, Small, Title } from "./styles";

export function SiteFooter() {
  return (
    <Footer>
      <Inner>
        <Mark
          src={courseMockups.footer}
          alt="Escola do Pentagrama, Voice of Eshu on laptop, phone, and tablet"
          width={1400}
          height={1241}
        />
        <Title>Eshu: The Guardian at the Crossroads</Title>
        <Line>Iyá Ifagbemisola — Ju Laroye</Line>
        <Small>
          <strong>Educational & spiritual growth disclaimer.</strong> Eshu: The Guardian at the
          Crossroads and all Escola do Pentagrama content are intended for educational and spiritual
          growth purposes. No specific transformation, insight, or outcome is guaranteed; results
          vary according to individual engagement and circumstances.
        </Small>
        <Small>© 2026 Escola do Pentagrama. All rights reserved.</Small>
      </Inner>
    </Footer>
  );
}
