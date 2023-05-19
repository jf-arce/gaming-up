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
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-9 text-base text-white">
        <button onClick={handleSubtract} className={`${amount === 1 ? "bg-red-500" : "bg-lightBlue hover:bg-sky-400 hover:transition-colors"} px-3 py-1 rounded-sm  `}>-</button>
        <h4>{amount}</h4>
        <button onClick={handleAdd} className={`${amount < stock ? "bg-lightBlue hover:bg-sky-400 hover:transition-colors" : "bg-red-500"} px-3 py-1 rounded-sm  `}>+</button>
      </div>
      <div>
        <Button text={<>{cartIcon} {`Agregar`}</>} onClick={addToCart} disabled={!stock} className="btn2"/>
      </div>
    </div>
  )
}
