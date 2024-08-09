import React from "react";
import styles from "./Logo.module.scss";
function Logo() {
  return (
    <section className={styles.container}>
      <a className={styles.logo} href="https://www.w3schools.com">
        Logo
      </a>
    </section>
  );
}

export default Logo;
