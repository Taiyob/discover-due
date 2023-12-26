import { Swiper, SwiperSlide } from "swiper/react";
//import { EffectFade } from "swiper";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  //EffectFlip
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper-bundle.min.css";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoPlay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
        navigation={true}
        //effect="fade"
        //effect="flip"
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/10835697/pexels-photo-10835697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/6358922/pexels-photo-6358922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/9039243/pexels-photo-9039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/19019470/pexels-photo-19019470/free-photo-of-arc-de-triomphe-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/19048044/pexels-photo-19048044/free-photo-of-wooden-house-on-pier-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/19408371/pexels-photo-19408371/free-photo-of-snowy-rocky-mountain-in-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/19561297/pexels-photo-19561297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/19570515/pexels-photo-19570515/free-photo-of-scooter-fahrt-an-der-kuste-von-uluwatu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://images.pexels.com/photos/16364339/pexels-photo-16364339/free-photo-of-a-mountain-with-a-town-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
