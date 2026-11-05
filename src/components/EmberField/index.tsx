import { useEffect, useState } from "react";

import { Dot, Field } from "./styles";

interface EmberDot {
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export function EmberField() {
  const [dots, setDots] = useState<EmberDot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 28 }, () => ({
        left: Math.random() * 100,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 10,
        size: 1 + Math.random() * 3,
      })),
    );
  }, []);

  return (
    <Field aria-hidden>
      {dots.map((dot, index) => (
        <Dot
          key={index}
          style={{
            left: `${dot.left}%`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </Field>
  );
}
