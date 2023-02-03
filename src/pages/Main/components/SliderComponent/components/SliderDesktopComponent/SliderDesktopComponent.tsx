import React, { useEffect, useRef } from "react";
import Styles from "./style.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PropsSliderDesktopComponent } from "../../../../../../../types";

export const SliderDesktopComponent: React.FC<PropsSliderDesktopComponent> = ({ slides, sliderRef }) => {
  const containerRef = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        pin: true,
        start: "top 200px",
        end: () => `$+=${sliderRef.current.scrollWidth - sliderRef.current.clientWidth}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(containerRef.current, {
      x: () => -(sliderRef.current.scrollWidth - sliderRef.current.clientWidth),
    });

    return () => {
      tl.kill();
    };
  }, [sliderRef]);

  return (
    <>
      <div className={Styles.sliderDesktop__container} ref={containerRef}>
        {slides.map((el, index) => {
          return <img className={Styles.sliderDesktop__image} key={el.id} src={el.image} alt={`${index + 1}`} />;
        })}
      </div>
    </>
  );
};
