import React from "react";
import styles from "./Link.module.scss";
function Link(props) {
  const { title } = props;
  return <a className={styles.itemLink}>{title}</a>;
}

export default Link;
