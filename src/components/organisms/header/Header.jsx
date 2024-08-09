import React from "react";
import Logo from "../../atoms/Logo/Logo";
import Nav from "../../molecules/nav/Nav";
import style from "./Header.module.scss";
function Header() {
  return (
    <section className={style.container}>
      <Logo />
      <Nav />
    </section>
  );
}

export default Header;
