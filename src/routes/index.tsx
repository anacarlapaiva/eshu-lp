import { createBrowserRouter, Navigate } from "react-router";

import { RootLayout } from "@/components/layout";
import { HomeScreen } from "@/screens/Home";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomeScreen /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: "/eshu-lp" },
);
