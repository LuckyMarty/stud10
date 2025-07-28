import Link from "next/link";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#111", color: "#fff" }}>
      <Link href="/">🏠 Accueil</Link>
      <Link href="/about">ℹ️ À propos</Link>
    </nav>
    <main style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</main>
  </div>
);

export default Layout;
