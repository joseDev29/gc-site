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
          <A>
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
            <A>Servicios</A>
          </Link>
        </li>
        <li>
          <Link href="/productos">
            <A>Productos</A>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <A>Contacto</A>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <A>Nosotros</A>
          </Link>
        </li>
      </Ul>
    </Container>
  );
};
