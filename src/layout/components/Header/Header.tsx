import React from "react";
import Styles from "./style.module.scss";
import Logo from "../../../images/logo.png";

export const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <img className={Styles.header__logo} src={Logo} alt="logo" />
      <a className={Styles.header__phone} href="#" target="#">
        +7 (495) 495-49-54
      </a>
    </header>
  );
};
