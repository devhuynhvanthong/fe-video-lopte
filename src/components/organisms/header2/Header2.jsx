import React from "react";
import Logo2 from "../../atoms/logo2/Logo2";
import Nav2 from "../../molecules/nav2/Nav2";
import styles from "./Header2.module.scss";
function Header2() {
  return (
    <section className={styles.container}>
      <Logo2 />
      <Nav2 />
    </section>
  );
}

export default Header2;
