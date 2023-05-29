import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CarouselBrands = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    touchMove: false,
    pauseOnHover: false,
    arrows: false,
    easing: 'linear',
  };
  return (
    <div className=" m-auto bg-white">
      <Slider {...settings}>
        <div className="slider-prod h-[60px]">
          <img className="w-[50px]" src="https://logodownload.org/wp-content/uploads/2014/09/corsair-logo-1-1.png" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo-24.png" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://compragamer.net/imagenes_marcas/imagen_marca_316_9_591.png" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://compragamer.net/imagenes_marcas/imagen_marca_364_9_203.jpg" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://compragamer.net/imagenes_marcas/imagen_marca_331_9_273.jpg" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://compragamer.net/imagenes_marcas/imagen_marca_308_9_866.jpg" alt="" />
        </div>
        <div className="slider-prod h-[60px]">
          <img className="w-[70px]" src="https://compragamer.net/imagenes_marcas/imagen_marca_322_9_619.jpg" alt="" />
        </div>
      </Slider>
    </div>
  )
}
