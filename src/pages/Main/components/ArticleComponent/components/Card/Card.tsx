import React from "react";
import Styles from "./style.module.scss";
import classNames from "classnames/bind";
import { PropsCard } from "../../../../../../../types";

export const Card: React.FC<PropsCard> = ({ title, text, image, reverse }) => {
  const cx = classNames.bind(Styles);
  const stylesImage = cx("card__image", { card__image_editOrder: reverse });

  return (
    <article className={Styles.card}>
      <img className={stylesImage} src={image} alt="img-card" />
      <div className={Styles.card__containerText}>
        <h3 className={Styles.card__title}>{title}</h3>
        {text.map((item, index) => {
          return (
            <p key={index} className={Styles.card__text}>
              {item}
            </p>
          );
        })}
      </div>
    </article>
  );
};
