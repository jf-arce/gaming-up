import { useState,useEffect } from 'react';
import getData from '../../services/getData'
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [img, setImg]=useState("");
  const [stock, setStock] = useState(null);
  const active = 'border-2 border-gray-300 rounded-sm';

  useEffect(()=>{
    getData().then(data =>{setProduct(data[0]); setImg(data[0].image1); data[0].stock > 0 ? setStock(true) : setStock(false)});
  },[])

  const handleClickImg = (image) =>{
    setImg(image);
  }

  return (
    <section>
      <div className="bg-white grid grid-cols-1 grid-rows-2 w-9/12 m-auto lg:grid-cols-[auto] lg:grid-rows-[auto]">
        <div className="border-[1px] border-b-gray-300 flex flex-col justify-center items-center p-5 gap-5">
          <img className='w-[70%]' src={img} alt="" />
          <div className='flex justify-evenly items-center gap-2'>
            <picture className={`${img === product.image1 ? active : ''} w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image1)} className='w-full cursor-pointer' src={product.image1} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image2 ? active : ''} w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image2)} className='w-full cursor-pointer' src={product.image2} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image3 ? active : ''} w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image3)} className='w-full cursor-pointer' src={product.image3} alt={product.nombre}/>
            </picture>
            <picture className={`${img === product.image4 ? active : ''} w-2/12 p-3`}>
              <img onClick={() => handleClickImg(product.image4)} className='w-full cursor-pointer' src={product.image4} alt={product.nombre}/>
            </picture>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-10 gap-11 border-[1px] border-l-gray-300 border-b-gray-300 relative">
          <h2 className="text-3xl text-center font-bold">{product.nombre}</h2>
          <div className='flex flex-col gap-4'>
            <p className='text-xl'>Precio efectivo o transferencia:</p>
            <p className='text-3xl font-bold'>${product.precio}</p>
          </div>
          <div className={`${stock === true ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded-sm`}>
            <h4 className='text-xs'>{stock === true ? "En Stock" : "Sin Stock"}</h4>
          </div>
          <div className='flex justify-center items-center w-full before:content-[""] before:w-[400px] before:h-[1.5px] before:bg-gray-300 before:absolute'>
            <ItemCount stock={product.stock}/>
          </div>
        </div>
        <div className="lg:col-span-2 ">
          <pre className="p-4 text-sm" style={{fontFamily: 'Telgraf'}}>{product.descripcion}</pre>
        </div>
      </div>
    </section>
    
  )
}
