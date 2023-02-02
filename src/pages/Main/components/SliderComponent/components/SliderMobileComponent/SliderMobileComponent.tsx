import React from "react";
import Styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Mousewheel } from "swiper";
import { PropsSliderMobileComponent } from "../../../../../../../types";

export const SliderMobileComponent: React.FC<PropsSliderMobileComponent> = ({ slides }) => {
  return (
    <Swiper
      className={Styles.mySwiper}
      slidesPerView="auto"
      spaceBetween={28}
      speed={600}
      keyboard
      direction="horizontal"
      mousewheel={{
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      modules={[Mousewheel]}
      allowTouchMove
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={slide.id}
            style={{
              marginLeft: "20px",
              width: "225px",
              height: "344px",
            }}
          >
            <img className={Styles.sliderMobile__image} src={slide.image} alt={`${index + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
