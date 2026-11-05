import { MotionConfig } from "motion/react";
import { RouterProvider } from "react-router";

import { ThemeModeProvider } from "@/providers/ThemeModeProvider";
import { router } from "@/routes";
import { GlobalStyles } from "@/styles/GlobalStyles";

function App() {
  return (
    <ThemeModeProvider>
      <MotionConfig reducedMotion="user">
        <GlobalStyles />
        <RouterProvider router={router} />
      </MotionConfig>
    </ThemeModeProvider>
  );
}

export default App;
