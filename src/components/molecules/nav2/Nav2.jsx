import React from "react";
import styles from "./Nav2.module.scss";
function Nav2() {
  return (
    <div className={styles.container}>
      <ul className={styles.boxNav}>
        <li className={styles["boxNav-link"]}>
          <a className={styles["boxNav-link-item"]} href="#">
            Features
          </a>
        </li>
        <li className={styles["boxNav-link"]}>
          <a className={styles["boxNav-link-item"]} href="#">
            Pricing
          </a>
        </li>
        <li className={styles["boxNav-link"]}>
          <a className={styles["boxNav-link-item"]} href="#">
            Testimonials
          </a>
        </li>
        <li className={styles["boxNav-link"]}>
          <a
            className={`${styles["boxNav-link-item"]} ${styles["boxNav-link-item__btn"]}`}
            href="#"
          >
            sing up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav2;
