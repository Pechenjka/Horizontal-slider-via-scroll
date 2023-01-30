import React from "react";

export interface IArticles {
  articleOnSlider: IArticle[];
  articleUnderSlider: IArticle[];
}

export interface IArticle {
  title: string;
  imageDesktop: string;
  text: Array<string>;
  id: number;
  reverse?: boolean;
}


export interface PropsArticleComponent {
  title: string;
  children: React.ReactNode;
}

export interface PropsCard {
  title: string;
  text: Array<string>;
  image: string;
  reverse?: boolean;
}
