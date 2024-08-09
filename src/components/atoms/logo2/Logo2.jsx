import React from "react";
import logo from "../../../assets/image/logo.png";
import style from "./Logo.module.scss";
function Logo2() {
  return (
    <div className={style.box}>
      <img className={style["box-img"]} alt="image" src={logo} />
      <h3 className={style["box-text"]}>Van Anh</h3>
    </div>
  );
}

export default Logo2;
