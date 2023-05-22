import { Button } from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Item = ({nombre,precio,imagen,id}) => {  
  const [fav,setfav]= useState(false);

  const handleFav = () =>{
    setfav(!fav);
  }
  return (
    <div data-aos="fade-up" className="relative bg-white w-80 min-h-[350px] flex flex-col justify-around items-center rounded-sm">
      <div onClick={handleFav} className="absolute top-0 right-0 mr-4 mt-3 bg-lightBlack rounded-full flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faHeart} className={`m-2 ${fav? 'text-red-500 favorite-heart' : 'text-slate-50'}`}/></div>
      <Link to={`/product/${id}`}><img src={imagen} alt={nombre} className="w-full object-cover h-[150px] pt-3"/></Link>
      <div className='bg-white flex flex-col justify-center items-start w-full px-5 gap-4'>
        <Link to={`/product/${id}`}><h3 className="text-lg text-lightBlack">{nombre}</h3></Link>
        <p className="text-2xl text-lightBlack font-bold tracking-wider">$ {precio}</p>
        <Link to={`/product/${id}`}>
          <Button
            text="Ver detalle"
            className="btn"
          />
        </Link>
      </div>
    </div>
  )
}
