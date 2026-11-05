export const easings = {
  smooth: [0.2, 0.7, 0.2, 1],
  snappy: [0.22, 1, 0.36, 1],
  sine: [0.45, 0, 0.55, 1],
} as const;

const toCubicBezier = ([x1, y1, x2, y2]: readonly number[]) =>
  `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;

export const transitions = {
  smooth: toCubicBezier(easings.smooth),
  snappy: toCubicBezier(easings.snappy),
  sine: toCubicBezier(easings.sine),
} as const;
