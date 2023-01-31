import React from "react";
import Styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Keyboard, Mousewheel } from "swiper";
import { PropsSliderComponent } from "../../../../../types";
import { useWindowSize } from "../../../../hooks/hooks";

export const SliderComponent: React.FC<PropsSliderComponent> = ({ title, slides }) => {
  const { width } = useWindowSize();

  return (
    <div className={Styles.slideShow}>
      <h2 className={Styles.slideShow__title}>{title}</h2>
      <Swiper
        className={Styles.mySwiper}
        slidesPerView={"auto"}
        spaceBetween={width <= 1024 ? 28 : 40}
        speed={600}
        keyboard
        direction={"horizontal"}
        mousewheel={{
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        modules={[Mousewheel, Keyboard]}
        allowTouchMove
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                marginLeft: `${index === 0 && (width <= 1024 ? "20px " : "262px")}`,
                width: width <= 1024 ? "225px " : "320px",
                height: width <= 1024 ? "344px " : "489px",
              }}
            >
              <img className={Styles.slideShow__image} src={slide} alt={`${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
