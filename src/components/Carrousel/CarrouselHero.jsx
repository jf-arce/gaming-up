// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

export default function CarrouselHero () {
  return (
    <div data-aos="fade-right">
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation //FLECHAS
        pagination={{ clickable: true }} //PUNTOS
        autoplay
        loop
        >
            <SwiperSlide>
                <img className="slider-img" src="https://www.fullh4rd.com.ar/adminrgb/img/banner/143.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider-img" src="https://www.gezatek.com.ar/uploads/15-05-2023-04-05-34-20-04-2023-05-04-24-RTX-SERIE-40-2200x600-GEZATEK.jpg" alt="" />
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