import React from "react";
import styles from "./Social.module.scss";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
function Social() {
  return (
    <div className={styles.container}>
      <a className={styles["container-boxIcon"]}>
        call
        {/* <BsFacebook className={styles["container-icon"]} /> */}
      </a>
      <a className={styles["container-boxIcon"]}>
        call
        {/* <AiFillTwitterCircle className={styles["container-icon"]} /> */}
      </a>
      <a className={styles["container-boxIcon"]}>
        call
        {/* <BsInstagram className={styles["container-icon"]} /> */}
      </a>
    </div>
  );
}

export default Social;
