import { motion } from "motion/react";
import styled from "styled-components";

const aluminum = "linear-gradient(180deg, #f3eee8 0%, #c9c2b8 42%, #8d8680 100%)";
const ink = "#100c0a";

export const Intro = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
`;

export const Lead = styled.p`
  margin: 1.25rem 0 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1.125rem;
  line-height: 1.7;
`;

export const Frame = styled.div`
  position: relative;
  width: min(100%, 62rem);
  margin: 3rem auto 0;
  aspect-ratio: 62 / 36;
  container-type: inline-size;
`;

export const Stage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 62rem;
  height: 36rem;
  transform: scale(calc(100cqi / 62rem));
  transform-origin: top left;
`;

export const Floor = styled.div`
  position: absolute;
  left: 4%;
  right: 4%;
  bottom: 0;
  height: 7rem;
  background:
    linear-gradient(180deg, rgb(255 248 240 / 0.16), transparent 70%),
    radial-gradient(ellipse at 42% 0%, rgb(208 29 33 / 0.28), transparent 62%);
  filter: blur(2px);
  pointer-events: none;
`;

export const Float = styled(motion.div)<{ $delay: string; $duration: string }>`
  position: absolute;
  animation: device-float ${({ $duration }) => $duration} ${({ $delay }) => $delay} ease-in-out infinite;

  @keyframes device-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-14px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LaptopPlace = styled(Float)`
  left: 0;
  bottom: 2.2rem;
  z-index: 1;
  width: 68%;
`;

export const Laptop = styled(motion.div)`
  filter: drop-shadow(0 28px 36px rgb(0 0 0 / 0.45));
`;

export const Lid = styled.div`
  padding: 0.7rem 0.7rem 0;
  border: 1px solid #6f6862;
  border-bottom: 0;
  border-radius: 0.9rem 0.9rem 0 0;
  background: ${aluminum};
`;

export const Screen = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 0.2rem;
  background:
    radial-gradient(ellipse at 50% 100%, #9a2a12 0%, transparent 58%),
    radial-gradient(ellipse at 50% 0%, #3a140c 0%, transparent 50%),
    ${ink};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg, rgb(255 255 255 / 0.16), transparent 28%);
    pointer-events: none;
  }
`;

export const Cover = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8% 10% 12%;
  text-align: center;
  color: #f6efe4;
`;

export const Path = styled.div`
  position: absolute;
  inset: auto 0 0;
  height: 58%;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Cross = styled.svg`
  position: relative;
  width: 3.4rem;
  height: 3.4rem;
  margin-bottom: 0.85rem;
  color: #f2c86c;
`;

export const CoverWord = styled.p`
  position: relative;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 5.4rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  line-height: 0.85;
  background: linear-gradient(180deg, #fff6e4 10%, #f2c86c 55%, #c47a2a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const CoverLine = styled.p<{ $quiet?: boolean }>`
  position: relative;
  margin: ${({ $quiet }) => ($quiet ? "0.7rem 0 0" : "0.85rem 0 0")};
  max-width: 16rem;
  color: ${({ $quiet }) => ($quiet ? "#f2c86c" : "#f6efe4")};
  font-size: ${({ $quiet }) => ($quiet ? "0.72rem" : "0.92rem")};
  font-weight: 600;
  letter-spacing: 0.22em;
  line-height: 1.35;
  text-transform: uppercase;
`;

export const Deck = styled.div`
  position: relative;
  height: 0.85rem;
  margin: 0 -4%;
  border-radius: 0 0 0.7rem 0.7rem;
  background: linear-gradient(180deg, #ded7cf, #7a746e 55%, #3e3a36);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.65);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16%;
    height: 0.35rem;
    transform: translateX(-50%);
    border-radius: 0 0 0.35rem 0.35rem;
    background: #2c2926;
  }
`;

export const TabletPlace = styled(Float)`
  right: 1%;
  bottom: 4.2rem;
  z-index: 2;
  width: 32%;
`;

export const Tablet = styled(motion.div)`
  position: relative;
  padding: 0.55rem;
  border-radius: 1.15rem;
  background: ${aluminum};
  box-shadow:
    0 24px 40px rgb(0 0 0 / 0.4),
    inset 0 1px 0 rgb(255 255 255 / 0.7);
`;

export const Camera = styled.span`
  position: absolute;
  top: 0.72rem;
  left: 50%;
  z-index: 2;
  width: 0.38rem;
  height: 0.38rem;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #1b1917;
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.25);
`;

export const TabletScreen = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3.15;
  border-radius: 0.55rem;
  background: ${ink};

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
  }
`;

export const Warm = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(16 8 6 / 0.15) 20%, rgb(16 8 6 / 0.72) 78%),
    radial-gradient(circle at 18% 42%, rgb(208 80 30 / 0.35), transparent 36%);
`;

export const Promises = styled.ul`
  position: absolute;
  top: 0;
  right: 0.85rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.85rem;
  width: 8.2rem;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

export const Promise = styled.li`
  color: #f6efe4;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const PhonePlace = styled(Float)`
  left: 44%;
  bottom: 0.6rem;
  z-index: 3;
  width: 15.5%;
`;

export const Phone = styled(motion.div)`
  position: relative;
  padding: 0.45rem 0.4rem 0.55rem;
  border-radius: 1.25rem;
  background: linear-gradient(180deg, #2a2623, #0e0c0b);
  box-shadow:
    0 22px 36px rgb(0 0 0 / 0.5),
    inset 0 1px 0 rgb(255 255 255 / 0.18);
`;

export const Island = styled.span`
  position: absolute;
  top: 0.7rem;
  left: 50%;
  z-index: 2;
  width: 28%;
  height: 0.55rem;
  transform: translateX(-50%);
  border-radius: 999px;
  background: #050403;
`;

export const PhoneScreen = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 9 / 16.4;
  border-radius: 0.85rem;
  background:
    radial-gradient(ellipse at 50% 100%, #9a2a12 0%, transparent 58%),
    ${ink};
  font-size: 0.46rem;

  ${CoverWord} {
    font-size: 2.15rem;
    letter-spacing: 0.08em;
  }

  ${Cross} {
    width: 1.7rem;
    height: 1.7rem;
    margin-bottom: 0.4rem;
  }

  ${CoverLine} {
    max-width: 7.5rem;
    font-size: 0.42rem;
    letter-spacing: 0.12em;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.25rem;
`;

export const OfferLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.emberGradient};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: 600;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
