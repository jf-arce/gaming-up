import { useState } from "react"
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const ItemCount = ({stock}) => {
  const [amount, setamount] = useState(1);
  const [total, setTotal] = useState(0);
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} className="text-sm"/>

  const handleAdd =()=> {
    if(amount < stock){
      setamount(amount + 1)
    }
  }
  const handleSubtract =()=> {
    if(amount > 1){
      setamount(amount - 1)
    }
  }
  const addToCart = () => amount

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center gap-9 text-base text-white">
        <button onClick={handleSubtract} className='bg-red-500 hover:bg-red-400 px-3 py-1 rounded-sm'>-</button>
        <h4 className="text-lightBlack">{amount}</h4>
        <button onClick={handleAdd} className='bg-lightBlue hover:bg-secondViolet hover:transition-colors px-3 py-1 rounded-sm'>+</button>
      </div>
      <div className="flex gap-8">
        <Button text={<>{cartIcon} {`Agregar`}</>} onClick={addToCart} disabled={!stock} className="btn2"/>
        <Button text="Comprar Ahora" className="btn"/>
      </div>
    </div>
  )
}
