"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HamburgerMenu from "./global/HamburgerMenu";

export default function NavBar() {
  return (
    <NavStyled>
      <Image
        src="/img/stud10-logo-short.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      {/* <Link href="/">🏠 Accueil</Link>
      <Link href="/about">ℹ️ À propos</Link> */}
      <HamburgerMenu />
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
