import { useState } from "react"
import { Button } from '../Button/Button'
import { CartWidget } from "../CartWidget/CartWidget"
import { NavBarSections } from "../NavBar/NavBarSections"
import { Link } from "react-router-dom"
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
import { useHideTopBar } from "../../Hooks/useHideTopBar"


export const MenuResponsive = ({active,setActive}) => {
    const [menu,setMenu] = useState(false);
    
    const handleMenu=()=>{
        setMenu(!menu)
    }
    const menuActive=()=> menu ? "dropLeft-active flex flex-col items-start justify-center gap-5 mx-12" : "hidden";

    const isScrolled = useHideTopBar(44)

    const handleClickChoice = () =>{
        setActive(false);
    }

    return (
        <div className={`${active? "dropDown-active" : "hidden"} ${isScrolled ? 'fixed top-24' : 'absolute top-[140px]'} w-screen z-10 bg-lightBlack xl:hidden`}>
            <div className="flex flex-col justify-center items-center">
                <h2 className="m-5 text-3xl text-slate-200">Carrito</h2>
                <CartWidget/>
            </div>
            <ul className='flex flex-col justify-center items-start gap-11 h-full m-9 relative'>
                <NavBarSections icon={<FontAwesomeIcon icon={faBasketShopping} />}text={`Productos`} event={handleMenu}/>
                <div className={`${menuActive()} relative`}>
                    <Link to='/category/teclados' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faKeyboard} />}text={"Teclados"}/>  
                    </Link>
                    <Link to='/category/mouse' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faComputerMouse} />}text={"Mouse"}/>
                    </Link>
                    <Link to='/category/monitores' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faDesktop} />} text={"Monitores"}/> 
                    </Link>
                    <Link to='/category/auriculares' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faHeadphones} />}text={"Auriculares"}/>  
                    </Link>
                    <Link to='/category/pc' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"Computadoras"}/>     
                    </Link>
                    <Link to='/category/all' onClick={handleClickChoice}>
                        <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"All"}/>     
                    </Link>
                </div>
                <NavBarSections icon={<FontAwesomeIcon icon={faWandMagicSparkles} />} text={"Sobre Nosotros"}/>
                <NavBarSections icon={<FontAwesomeIcon icon={faUser} />} text={"Contacto"}/>
                <NavBarSections icon={<FontAwesomeIcon icon={faStar} />} text={"Eventos"}/>
                <Button text="Log in" className="btn"/>
            </ul>
        </div>
    )
}

