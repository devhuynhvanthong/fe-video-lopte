import React from "react";
import styles from "./TextCustom.module.scss";
function TextCustom(props) {
  const { title } = props;
  return <p className={styles.text}>{title}</p>;
}

export default TextCustom;
