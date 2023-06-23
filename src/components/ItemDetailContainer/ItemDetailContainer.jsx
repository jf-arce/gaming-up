import { useState,useEffect } from 'react';
import { getItemData } from '../../services/firebaseConfig';
import { ItemCount } from "../ItemCount/ItemCount";
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Loader } from '../Loader/Loader';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [img, setImg]=useState("");
  const [stock, setStock] = useState(null);
  const {id} = useParams();
  const active = 'border-2 border-gray-300 rounded-sm';
  const { addItem } = useCartContext();

  useEffect(()=>{
    getItemData(id)
      .then(data =>{
        setProduct(data); 
        setImg(data.image1); 
        data.stock > 0 ? setStock(true) : setStock(false);
      })
  },[id])

  const handleClickImg = (image) =>{
    setImg(image);
  }

  const addToCart = (amount) =>{
    addItem(product,amount);
  }

  if (product.length === 0) return <Loader/>
  
  return (
    <section className='min-h-screen'>
      <div data-aos="fade-down" className="bg-white grid grid-cols-1 grid-rows-[auto] w-11/12 min-h-screen xl:w-9/12 m-auto lg:grid-cols-2 lg:grid-rows-[auto]">
        <div className="border-[1px] border-b-gray-300 flex flex-col justify-evenly items-center p-5 gap-5">
          <img className='w-[70%]' src={img} alt={product.nombre} />
          <div className='flex justify-evenly items-center gap-2'>
            <picture className={`${img === product.image1 ? active : 'opacity-[0.6]'} w-4/12 xl:w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image1)} className='w-full cursor-pointer' src={product.image1} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image2 ? active : 'opacity-[0.6]'} w-4/12 xl:w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image2)} className='w-full cursor-pointer' src={product.image2} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image3 ? active : 'opacity-[0.6]'} w-4/12 xl:w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image3)} className='w-full cursor-pointer' src={product.image3} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image4 ? active : 'opacity-[0.6]'} w-4/12 xl:w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image4)} className='w-full cursor-pointer' src={product.image4} alt={product.nombre}/>
            </picture>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-10 gap-11 border-[1px] border-l-gray-300 border-b-gray-300 relative">
          <h2 className="text-3xl text-start font-bold">{product.name}</h2>
          <div className='flex flex-col gap-4'>
            <p className='text-xl'>Precio efectivo o transferencia:</p>
            <p className='text-3xl font-bold'>${product.price}</p>
          </div>
          <div className={`${stock === true ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded-sm`}>
            <h4 className='text-xs'>{stock === true ? "En Stock" : "Sin Stock"}</h4>
          </div>
          <div className='flex justify-center items-center w-full before:content-[""] xl:before:w-[400px] before:w-[300px] before:h-[1.5px] before:bg-gray-300 before:absolute'>
            <ItemCount stock={product.stock} addToCart={addToCart}/>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-5 pl-5">
          <h2 className='text-2xl py-3'>Especificaciones Tecnicas</h2>
          <p className="text-sm" style={{fontFamily: 'Telgraf'}}>{product.description}</p>
        </div>
      </div>
    </section>
    
  )
}
