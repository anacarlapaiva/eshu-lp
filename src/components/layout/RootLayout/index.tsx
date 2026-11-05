import { Outlet } from "react-router";

import { ScrollManager } from "@/components/layout/ScrollManager";

export function RootLayout() {
  return (
    <>
      <ScrollManager />
      <Outlet />
    </>
  );
}
