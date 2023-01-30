import React from "react";
import Styles from "./style.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.footer__copyright}>&#169; TEST, 1022-{new Date().getFullYear()}</p>
    </footer>
  );
};
