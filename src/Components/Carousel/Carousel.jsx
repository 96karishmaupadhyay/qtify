import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

let Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

let Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigation />
        <RightNavigation />
        {data.map((item) => {
          return <SwiperSlide>{renderComponent(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
