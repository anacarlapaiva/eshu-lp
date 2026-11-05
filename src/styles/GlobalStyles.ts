import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition:
      background-color 0.35s ease,
      color 0.35s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    -webkit-user-drag: none;
    user-select: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }

  @keyframes kenburns {
    0% { transform: scale(1.05); }
    100% { transform: scale(1.18) translate(-1%, -1%); }
  }

  @keyframes rise {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: none; }
  }

  @keyframes slow-zoom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.07); }
  }

  @keyframes ember {
    0% { opacity: 0; transform: translateY(0); }
    15% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-100vh) translateX(30px); }
  }

  @keyframes marquee {
    100% { transform: translateX(-50%); }
  }

  @keyframes progress-fill {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
