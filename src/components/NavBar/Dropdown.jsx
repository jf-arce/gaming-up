import { NavBarSections } from "./NavBarSections"
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faComputerMouse} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {faComputer} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useHideTopBar } from "../../Hooks/useHideTopBar"


export const Dropdown = ({active,setActive}) =>{

    const isScrolled = useHideTopBar(44);

    const handleClickChoice = () =>{
        setActive(false);
    }
    return(
        <div id="dropdown" className={`${active? "xl:flex top-24 dropDown-active" : ""} ${isScrolled ? 'top-24 transition-all' : 'top-[140px] transition-all'} h-auto fixed z-10 w-full hidden justify-center items-center bg-lightBlack`}>
            <div className="w-9/12 flex justify-center m-6 container-siblings flex-wrap gap-14">
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