import { Button } from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Item = ({name,price,image1,id}) => {  
  const [fav,setfav]= useState(false);

  const handleFav = () =>{
    setfav(!fav);
  }
  return (
    <div data-aos="fade-up" className="relative bg-white w-[300px] min-h-[350px] flex flex-col items-center rounded-sm shadow-md hover:shadow-xl transition-shadow">
      <div onClick={handleFav} className="absolute top-0 right-0 mr-4 mt-3 bg-lightBlack rounded-full flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faHeart} className={`m-2 ${fav? 'text-red-500 favorite-heart' : 'text-slate-50'}`}/></div>
      <Link to={`/item/${id}`}><img src={image1} alt={name} className="w-full object-cover h-[150px] pt-3"/></Link>
      <div className='bg-white flex flex-col flex-1 items-start w-full px-5 mt-4'>
        <Link to={`/item/${id}`}><h3 className="text-lg text-lightBlack min-h-[84px]">{name}</h3></Link>
        <p className="text-2xl text-lightBlack font-bold tracking-wider">$ {price}</p>
        <Link to={`/item/${id}`}>
          <Button
            text="Ver detalle"
            className="btn mt-5"
          />
        </Link>
        
      </div>
    </div>
  )
}
