import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

export const CartProduct = ({id,image1,name,amount,price,handleDelateItem}) => {
    const handleAdd = () => {
        
    };
    const handleSubtract = () => {
        
    };
  return (
    <div key={id} className="bg-white flex justify-between px-10 py-5 rounded-sm">
        <img src={image1} className="h-[100px] rounded-sm"></img>
        <h3 className="flex items-center text-center max-w-[240px] justify-center">{name}</h3>
        {/* <p className="flex items-center text-center">{amount}</p> */}
        <div className="flex items-center gap-9 text-base text-white">
            <button
            onClick={handleSubtract}
            className="bg-red-500 hover:bg-red-400 px-3 py-1 rounded-sm"
            >
            -
            </button>
            <h4 className="text-lightBlack">{amount}</h4>
            <button
            onClick={handleAdd}
            className="bg-lightBlue hover:bg-secondViolet hover:transition-colors px-3 py-1 rounded-sm"
            >
            +
            </button>
        </div>
        <p className="flex items-center text-center min-w-[100px]">$ {price * amount}</p>
        <div className='flex items-center'>
            <FaTrashAlt className="text-red-500 cursor-pointer text-lg" onClick={()=> handleDelateItem(id)}/>
        </div>
        
    </div>
  )
}
