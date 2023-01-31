import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <section className={Styles.notFound}>
      <h2 className={Styles.notFound__error}>404</h2>
      <Link className={Styles.notFound__backLink} to="/">
        Back
      </Link>
    </section>
  );
};
