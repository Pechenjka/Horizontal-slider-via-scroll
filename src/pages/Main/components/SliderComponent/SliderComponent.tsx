import React from "react";
import Styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Keyboard, Mousewheel } from "swiper";
import { PropsSliderComponent } from "../../../../../types";

export const SliderComponent: React.FC<PropsSliderComponent> = ({ title, slides }) => {
  return (
    <div className={Styles.slideShow}>
      <h2 className={Styles.slideShow__title}>{title}</h2>
      <Swiper
        className={Styles.mySwiper}
        slidesPerView={"auto"}
        spaceBetween={40}
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
              style={index === 0 ? { marginLeft: "262px", width: "320px" } : { marginLeft: "0", width: "320px" }}
            >
              <img src={slide} alt={`${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
