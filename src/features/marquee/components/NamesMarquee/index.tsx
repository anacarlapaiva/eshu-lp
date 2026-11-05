import { Band, Item, Star, Track } from "./styles";

const names = [
  "Elegba · West Africa",
  "Legba · Haiti",
  "Eleguá · Cuba",
  "Eshu · Brazil",
  "Guardian of Thresholds",
  "Lord of the Crossroads",
];

export function NamesMarquee() {
  const loop = [...names, ...names];

  return (
    <Band aria-hidden>
      <Track>
        {loop.map((name, index) => (
          <Item key={`${name}-${index}`}>
            {name}
            <Star>✦</Star>
          </Item>
        ))}
      </Track>
    </Band>
  );
}
