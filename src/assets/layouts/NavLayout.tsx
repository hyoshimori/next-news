import { ReactNode } from "react";
import Nav from "src/assets/components/main/nav/Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav></Nav>
      {children}
    </>
  );
}
