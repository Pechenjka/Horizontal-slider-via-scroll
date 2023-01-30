import React from "react";
import Styles from "./style.module.scss";
import Logo from "../../../images/logo.png";

export const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.header__container}>
        <img className={Styles.header__logo} src={Logo} alt="logo" />
        <nav>
          <a className={Styles.header__phone} href="#" target="#">
            +7 (495) 495-49-54
          </a>
        </nav>
      </div>
    </header>
  );
};
