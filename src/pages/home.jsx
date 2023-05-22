import { CarrouselProducts } from "../components/Carrousel/CarrouselProducts";
import CarrouselHero from "../components/Carrousel/CarrouselHero";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"

export default function Home(){
    return (
      <div className="home"> 
        <CarrouselHero/>
        <h2 className='text-center text-3xl font-bold text-slate-50 m-10 icon'> Destacados </h2>
        <CarrouselProducts/>
        <ItemListContainer greeting="BIENVENID@ A GAMING UP"/>
      </div>
    )
}
