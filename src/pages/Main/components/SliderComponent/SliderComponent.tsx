import React, { useRef } from "react";
import Styles from "./style.module.scss";
import "swiper/scss";
import { useWindowSize } from "../../../../hooks/hooks";
import { SliderMobileComponent } from "./components/SliderMobileComponent";
import { SliderDesktopComponent } from "./components/SliderDesktopComponent";
import { slides } from "../../../../assets/config";

export const SliderComponent: React.FC = () => {
  const { width } = useWindowSize();
  const sliderRef = useRef<any>(null);

  return (
    <div style={{ width: "100%" }}>
      <div className={Styles.slider} ref={sliderRef}>
        <h2 className={Styles.slider__title}>Lorem ipsum dolor sit amet</h2>
        {width <= 768 ? (
          <SliderMobileComponent slides={slides} />
        ) : (
          <SliderDesktopComponent slides={slides} sliderRef={sliderRef} />
        )}
      </div>
    </div>
  );
};
