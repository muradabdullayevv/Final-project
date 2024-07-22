import React from "react";
import sec5logo1 from "../images/sec5logo1.png";
import sec5logo2 from "../images/sec5logo2.png";
import sec5logo3 from "../images/sec5logo3.png";
import sec5logo4 from "../images/sec5logo4.png";
import sec5logo5 from "../images/sec5logo5.png";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <>
    {/* <img src={sec5logo1} alt="" /> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sec5logo4} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo2} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo3} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo4} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo5} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo3} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo4} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={sec5logo2} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default index;
