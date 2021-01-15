import React, { useState } from "react";
import { Container, Logo, Ul, A } from "./styles";
import { MdReorder } from "react-icons/md";
import Link from "next/link";
export const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Container>
      <Logo>
        <div className="util"></div>
        <Link href="/">
          <A onClick={() => setDropdown(false)}>
            <img className="logo-icon" src="/gc-logo-navbar.svg" alt="" />
          </A>
        </Link>
        <MdReorder
          className="dropdown-button"
          onClick={() => {
            dropdown ? setDropdown(false) : setDropdown(true);
          }}
        />
      </Logo>

      <Ul down={dropdown}>
        <li>
          <Link href="/servicios">
            <A onClick={() => setDropdown(false)}>Servicios</A>
          </Link>
        </li>
        <li>
          <Link href="/productos">
            <A onClick={() => setDropdown(false)}>Productos</A>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <A onClick={() => setDropdown(false)}>Contacto</A>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <A onClick={() => setDropdown(false)}>Nosotros</A>
          </Link>
        </li>
      </Ul>
    </Container>
  );
};
