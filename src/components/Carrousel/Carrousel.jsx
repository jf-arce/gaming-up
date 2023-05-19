// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

export default () => {
  return (
    <div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation //FLECHAS
        pagination={{ clickable: true }} //PUNTOS
        scrollbar={{ draggable: true }} //BARRA DE SCROLL
        autoplay
        loop
        >
            <SwiperSlide>
                <img className="slider-img" src="https://www.fullh4rd.com.ar/adminrgb/img/banner/143.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider-img" src="https://www.fullh4rd.com.ar/adminrgb/img/banner/117.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider-img" src="https://www.fullh4rd.com.ar/adminrgb/img/banner/130.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider-img" src="https://www.fullh4rd.com.ar/adminrgb/img/banner/138.png" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
    
  );
};