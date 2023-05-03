import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
  return (
    <div className='flex gap-3 items-center'>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"1.2em"}} className='cursor-pointer text-slate-200 hover:text-lightBlue hover:hover:transition-colors' />
        <span className='text-slate-100 text-sm' style={{fontFamily:"Sans-Serif"}}>0</span>
    </div>
  )
}
