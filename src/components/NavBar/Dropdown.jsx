import { NavBarSections } from "./NavBarSections"
import { Link } from "react-router-dom"
import { useHideTopBar } from "../../Hooks/useHideTopBar"
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faComputerMouse} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {faComputer} from '@fortawesome/free-solid-svg-icons'

export const Dropdown = ({active,setActive}) =>{

    const isScrolled = useHideTopBar(44);

    const handleClickChoice = () =>{
        setActive(false);
    }
    return(
        <div id="dropdown" className={`${active? "xl:flex dropDown-active" : ""} ${isScrolled ? 'fixed top-24' : 'absolute top-[140px]'} z-10 h-auto w-full hidden justify-center items-center bg-lightBlack`}>
            <div className="w-10/12 flex justify-center m-6 container-siblings flex-wrap gap-14">
                <DropDownSections url="/category/teclados" name="Teclados" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faKeyboard} />}text={"Teclados"}/>  
                </DropDownSections>
                <DropDownSections url="/category/mouse" name="Mouse" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputerMouse} />}text={"Mouse"}/>
                </DropDownSections>
                <DropDownSections url="/category/monitores" name="Monitores" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faDesktop} />} text={"Monitores"}/> 
                </DropDownSections>
                <DropDownSections url="/category/auriculares" name="Auriculares" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faHeadphones} />}text={"Auriculares"}/>  
                </DropDownSections>
                <DropDownSections url="/category/pc" name="Computadoras" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"Computadoras"}/> 
                </DropDownSections>
                <DropDownSections url="/category/all" name="All" onClick={handleClickChoice}>
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"All"}/> 
                </DropDownSections>
            </div>
        </div>
    )
}

const DropDownSections= props =>{
    return(
        <Link to={props.url} className="sibling">
            <div onClick={props.onClick} className="border-solid border-slate-200 border-2 p-12 w-52 flex justify-center items-center rounded-sm">
                {props.children}
            </div>
        </Link>
        
    )
}