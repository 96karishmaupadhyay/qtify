import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../Assets/left.svg";

let LeftNavigation = () => {
  let swiper = useSwiper();
  let [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigation;
