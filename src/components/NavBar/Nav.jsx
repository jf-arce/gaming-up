import { NavBarSections } from "./NavBarSections"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export const Nav = ({evento}) => {

    return (
    <nav className='hidden justify-center items-center xl:flex'>
        <ul className='flex justify-center items-center gap-11'>
            <NavBarSections icon={<FontAwesomeIcon icon={faBasketShopping} />}text={`Productos`} event={evento}/>
            <NavBarSections icon={<FontAwesomeIcon icon={faWandMagicSparkles} />} text={"About"}/>
            <NavBarSections icon={<FontAwesomeIcon icon={faUser} />} text={"Contacto"}/>
            <NavBarSections icon={<FontAwesomeIcon icon={faStar} />} text={"Eventos"}/>
        </ul>
    </nav>
  )
}
