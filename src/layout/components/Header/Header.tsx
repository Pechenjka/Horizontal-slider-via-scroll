import React from "react";
import Styles from "./style.module.scss";
import Logo from "../../../images/logo.png";
import ClassNames from "classnames/bind";
import { useWindowSize } from "../../../hooks/hooks";

export const Header: React.FC = () => {
  const cx = ClassNames.bind(Styles);
  const { width } = useWindowSize();

  return (
    <header className={Styles.header}>
      <div className={Styles.header__container}>
        <img className={Styles.header__logo} src={Logo} alt="logo" />
        <nav>
          <a className={cx("header__phone", { header__phone_icon: width <= 768 })} href="#" target="_blank">
            {width > 768 ? "+7 (495) 495-49-54" : null}
          </a>
        </nav>
      </div>
    </header>
  );
};
