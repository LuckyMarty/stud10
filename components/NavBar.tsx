"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#111", color: "#fff" }}>
      <Link href="/">🏠 Accueil</Link>
      <Link href="/about">ℹ️ À propos</Link>
    </nav>
  );
}
