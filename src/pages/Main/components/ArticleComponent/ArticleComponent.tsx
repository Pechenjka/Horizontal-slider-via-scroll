import React from "react";
import Styles from "./style.module.scss";
import { PropsArticleComponent } from "../../../../../types";

export const ArticleComponent: React.FC<PropsArticleComponent> = ({ title, children }) => {
  return (
    <article className={Styles.article}>
      <h2 className={Styles.article__title}>{title}</h2>
      {children}
    </article>
  );
};
