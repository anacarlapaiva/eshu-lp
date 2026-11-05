import { Container, GoldText } from "@/components";
import { revealOnScroll } from "@/animations";
import { SectionShell } from "@/features/shared/sectionStyles";

import { Closing, EshuWord, Lead, Sub, Wrap } from "./styles";

export function IntroSection() {
  return (
    <SectionShell>
      <Container width="narrow">
        <Wrap>
          <Lead {...revealOnScroll()}>
            I bet you've read the books, got in touch with your spirituality, and understand your
            patterns well enough to explain them to someone else.
          </Lead>
          <Sub {...revealOnScroll(80)}>
            But still, there are places in your life where nothing moves. Decisions that stay unmade.
            Paths that feel blocked for no reason you can name. A sense that you're circling the same
            crossroads.
          </Sub>
          <Sub {...revealOnScroll(160)}>
            Some traditions have understood this for a long time. For them it is a problem with a
            name, a logic, and a guide assigned to it:
          </Sub>
          <EshuWord {...revealOnScroll(240)}>
            <GoldText>ESHU</GoldText>
          </EshuWord>
          <Closing {...revealOnScroll(320)}>
            This course introduces you to that guide and shows how his energy can help you move
            forward.
          </Closing>
        </Wrap>
      </Container>
    </SectionShell>
  );
}
