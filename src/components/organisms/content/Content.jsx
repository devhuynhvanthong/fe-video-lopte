import React from "react";
import PropTypes from "prop-types";
import TextCustom from "../../atoms/text/TextCustom";
import Button from "../../atoms/buttom/Button";
import styles from "./Content.module.scss";
import Social from "../../molecules/social/Social";
function Content(props) {
  return (
    <div>
      <TextCustom title={"Like nature"} />
      <TextCustom title={"Be creative"} />
      <p className={styles.textContent}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, enim
        pariatur aliquid tempora deserunt fuga perspiciatis laborum officiis
        incidunt odio. Aut, ipsum aperiam? Officia deserunt sit nostrum officiis
        consectetur quo?
      </p>
      <Button />
      <Social />
    </div>
  );
}

Content.propTypes = {};

export default Content;
