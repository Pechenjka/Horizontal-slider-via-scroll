import Image1FromArticle1 from "../images/image1FromArticle1.png";
import Image2FromArticle1 from "../images/image2FromArticle1.png";
import Image1FromArticle2 from "../images/image1FromArticle2.png";
import Image2FromArticle2 from "../images/image2FromArticle2.png";
import slide1 from "../images/slides/slide1.png";
import slide2 from "../images/slides/slide2.png";
import slide3 from "../images/slides/slide3.png";
import slide4 from "../images/slides/slide4.png";
import slide5 from "../images/slides/slide5.png";
import slide6 from "../images/slides/slide6.png";
import slide7 from "../images/slides/slide7.png";
import slide8 from "../images/slides/slide8.png";
import slide9 from "../images/slides/slide9.png";
import slide10 from "../images/slides/slide10.png";

import { IArticles } from "../../types";

export const slides: Array<string> = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

export const articles: IArticles = {
  articleOnSlider: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageDesktop: Image1FromArticle1,
      text: [
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ],
      id: 1,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageDesktop: Image2FromArticle1,
      text: [
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ],
      reverse: true,
      id: 2,
    },
  ],
  articleUnderSlider: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageDesktop: Image1FromArticle2,
      text: [
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ],
      id: 1,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageDesktop: Image2FromArticle2,
      text: [
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ],
      reverse: true,
      id: 2,
    },
  ],
};
