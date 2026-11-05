import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { portraits } from "@/constants/assets";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import {
  Action,
  Camera,
  Cover,
  CoverLine,
  CoverWord,
  Cross,
  Deck,
  Floor,
  Frame,
  Intro,
  Island,
  Laptop,
  LaptopPlace,
  Lead,
  Lid,
  OfferLink,
  Path,
  Phone,
  PhonePlace,
  PhoneScreen,
  Promise,
  Promises,
  Screen,
  Stage,
  Tablet,
  TabletPlace,
  TabletScreen,
  Warm,
} from "./styles";

const promises = [
  "Movement",
  "Decision",
  "Change",
  "The firmeza",
];

function CourseCover() {
  return (
    <Cover>
      <Path aria-hidden>
        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2c86c" stopOpacity="0" />
              <stop offset="1" stopColor="#e07a2f" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path d="M200 0 L250 220 L150 220 Z" fill="url(#road)" />
          <path d="M200 18 L168 220" stroke="#f2c86c" strokeOpacity="0.35" />
          <path d="M200 18 L232 220" stroke="#f2c86c" strokeOpacity="0.35" />
        </svg>
      </Path>
      <Cross aria-hidden viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M32 6v52M6 32h52" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="32" cy="32" r="2.4" fill="currentColor" />
      </Cross>
      <CoverWord>Eshu</CoverWord>
      <CoverLine>The guardian of the crossroads</CoverLine>
      <CoverLine $quiet>Voice of Eshu</CoverLine>
    </Cover>
  );
}

export function ShowcaseSection() {
  return (
    <SectionShell>
      <Container width="wide">
        <Intro>
          <SectionEyebrow>Voice of Eshu</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>A 13-lesson self-paced course</SectionTitle>
          <Lead>
            With Priestess Iyá Ju Laroye on the Afro-Brazilian spirit guide of movement, decision,
            and change.
          </Lead>
        </Intro>

        <Frame>
          <Stage>
            <Floor aria-hidden />

            <LaptopPlace $delay="0s" $duration="7.2s">
              <Laptop {...revealOnScroll(60)}>
                <Lid>
                  <Screen>
                    <CourseCover />
                  </Screen>
                </Lid>
                <Deck aria-hidden />
              </Laptop>
            </LaptopPlace>

            <TabletPlace $delay="0.7s" $duration="8.4s">
              <Tablet {...revealOnScroll(140)}>
                <Camera aria-hidden />
                <TabletScreen>
                  <img
                    src={portraits.ju}
                    alt="Iyá Ju Laroye, Priestess of Sacred Umbanda"
                  />
                  <Warm />
                  <Promises>
                    {promises.map((item) => (
                      <Promise key={item}>{item}</Promise>
                    ))}
                  </Promises>
                </TabletScreen>
              </Tablet>
            </TabletPlace>

            <PhonePlace $delay="0.35s" $duration="6.4s">
              <Phone {...revealOnScroll(220)}>
                <Island aria-hidden />
                <PhoneScreen>
                  <CourseCover />
                </PhoneScreen>
              </Phone>
            </PhonePlace>
          </Stage>
        </Frame>

        <Action>
          <OfferLink href="#offer">Enroll from $197 to $97</OfferLink>
        </Action>
      </Container>
    </SectionShell>
  );
}
