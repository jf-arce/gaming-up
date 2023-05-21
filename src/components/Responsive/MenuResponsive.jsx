import { useState } from "react"
import { Button } from '../Button/Button'
import { CartWidget } from "../CartWidget/CartWidget"
import { NavBarSections } from "../NavBar/NavBarSections"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faComputerMouse} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {faComputer} from '@fortawesome/free-solid-svg-icons'

export const MenuResponsive = ({active}) => {
    const [menu,setMenu] = useState(false);
    
    const handleMenu=()=>{
        setMenu(!menu)
    }
    const menuActive=()=> menu ? "dropLeft-active flex flex-col items-start justify-center gap-5 mx-12" : "hidden";

    return (
        <div className={`${active? "dropDown-active" : "hidden"} w-screen absolute top-0 z-10 bg-lightBlack my-24 xl:hidden`}>
            <div className="flex flex-col justify-center items-center">
                <h2 className="m-5 text-3xl text-slate-200">Carrito</h2>
                <CartWidget/>
            </div>
            <ul className='flex flex-col justify-center items-start gap-11 h-full m-9 relative'>
                <NavBarSections icon={<FontAwesomeIcon icon={faBasketShopping} />}text={`Productos`} event={handleMenu}/>
                <div className={`${menuActive()} relative`}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faKeyboard} />}text={"Teclados"}/>  
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputerMouse} />}text={"Mouse"}/>
                    <NavBarSections icon={<FontAwesomeIcon icon={faDesktop} />} text={"Monitores"}/> 
                    <NavBarSections icon={<FontAwesomeIcon icon={faHeadphones} />}text={"Auriculares"}/>  
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"Computadoras"}/>     
                </div>
                <NavBarSections icon={<FontAwesomeIcon icon={faWandMagicSparkles} />} text={"Sobre Nosotros"}/>
                <NavBarSections icon={<FontAwesomeIcon icon={faUser} />} text={"Contacto"}/>
                <NavBarSections icon={<FontAwesomeIcon icon={faStar} />} text={"Eventos"}/>
                <Button text="Log in" className="btn"/>
            </ul>
        </div>
    )
}

