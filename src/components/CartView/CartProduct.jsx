import {FaTrashAlt} from 'react-icons/fa'

export const CartProduct = ({id,image1,name,amount,price,handleDelateItem}) => {
  return (
    <div key={id} className="bg-white flex flex-col md:flex-row justify-between px-10 py-5 rounded-sm">
      <div className='min-w-[160px] flex justify-center items-center'>
        <img src={image1} className="h-[100px] rounded-sm"></img>
      </div>
      <div className='flex md:flex-col justify-center items-center gap-5 md:max-w-[240px] p-4 md:p-0'>
        <h3 className='font-bold'>Nombre:</h3>
        <h3 className="flex items-center md:text-center justify-center">{name}</h3>
      </div>
      <div className='flex md:flex-col md:justify-center items-center gap-5 md:min-w-[100px] p-4 md:p-0'>
        <h3 className='font-bold'>Cantidad:</h3> 
        <p className="flex items-center text-center">{amount}</p>
      </div>
      <div className='flex md:flex-col md:justify-center items-center gap-5 md:min-w-[100px] p-4 md:p-0'>
        <h3 className='font-bold'>Precio:</h3>
        <p className="flex items-center justify-center text-center ">$ {price * amount}</p>
      </div>
      <div className='flex items-center justify-center p-4 md:p-0'>
        <FaTrashAlt className="text-red-500 cursor-pointer text-lg" onClick={()=> handleDelateItem(id)}/>
      </div>
    </div>
  )
}
