import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useEffect , useState} from 'react';
import { Item } from '../ItemListContainer/Item';
import getData from '../../services/getData';

export const CarrouselProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getData()
            .then(data => setProducts(data)); 
    },[])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div className="w-10/12 m-auto">
            <Slider {...settings}>
                {products.map(prod => 
                    <div key={prod.id} className="slider-prod">
                        <Item {...prod}/>
                    </div>
                )}
            </Slider>
        </div>
    )
}
