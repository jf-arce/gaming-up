import { NavBarSections } from "./NavBarSections"
import { Link } from "react-router-dom"
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export const Nav = ({evento}) => {
    return (
    <nav className='hidden justify-center items-center xl:flex'>
        <ul className='flex justify-center items-center gap-5'>
            <NavBarSections icon={<FontAwesomeIcon icon={faBasketShopping}/>} text={"Productos"} event={evento}/>
            <Link to='/about'>
                <NavBarSections url="/product" icon={<FontAwesomeIcon icon={faWandMagicSparkles} />} text={"About"}/>
            </Link>
            <Link to='/about'>
                <NavBarSections icon={<FontAwesomeIcon icon={faUser} />} text={"Contacto"}/>
            </Link>
            <Link to='/about'>
                <NavBarSections icon={<FontAwesomeIcon icon={faStar} />} text={"Eventos"}/>
            </Link>
        </ul>
    </nav>
  )
}
