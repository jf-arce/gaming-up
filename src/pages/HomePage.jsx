import { CarouselProducts } from "../components/Carousels/CarouselProducts";
import { CarouselHero } from "../components/Carousels/CarouselHero";
import { CarouselBrands } from "../components/Carousels/CarouselBrands";

export const HomePage = () =>{
  return (
    <div className="home"> 
      <CarouselHero/>
      <h2 className='text-center text-3xl font-bold text-darkBlack m-10'> Destacados </h2>
      <CarouselProducts/>
      <div className="max-w-[1180px] mx-auto my-10">
        <picture>
          <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
        </picture>
      </div>
      <CarouselBrands/>
    </div>
  )
}