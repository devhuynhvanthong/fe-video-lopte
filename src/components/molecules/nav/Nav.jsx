import React from "react";
import Link from "../../atoms/link/Link";
import PropTypes from "prop-types";
import styles from "./Nav.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Nav() {
  const [check, setCheck] = React.useState(false);
  return (
    <div className={styles.container}>
      <button
        className={check ? styles.btnHide : styles.btnCheck}
        onClick={() => setCheck(true)}
      >
        <AiOutlineMenu className={styles.iconMenu} />
      </button>
      <button
        onClick={() => setCheck(false)}
        className={check ? styles.btnCancel : styles.btnCancelhide}
      >
        <AiOutlineClose className={styles.iconClose} />
      </button>

      <div className={check ? styles.checkBackground : styles.containerBar}>
        <Link title={"Home"} />
        <Link title={"About"} />
        <Link title={"Info"} />
        <Link title={"Sevice"} />
        <Link title={"Contact"} />
      </div>
    </div>
  );
}

export default Nav;
// Nav.prototype = {
//   title: PropTypes.string,
// };
