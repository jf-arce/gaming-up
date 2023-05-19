import { NavBarSections } from "./NavBarSections"

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faComputerMouse} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {faComputer} from '@fortawesome/free-solid-svg-icons'

export const Dropdown = ({active}) =>{
    return(
        <div id="dropdown" className={`${active? "xl:flex top-24 dropDown-active" : ""} h-auto fixed z-10 w-full hidden justify-center items-center bg-lightBlack`}>
            <div className="w-9/12 flex justify-center m-6 container-siblings flex-wrap gap-14">
                <DropDownSections name="Teclados">
                    <NavBarSections icon={<FontAwesomeIcon icon={faKeyboard} />}text={"Teclados"}/>  
                </DropDownSections>
                <DropDownSections name="Mouse">
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputerMouse} />}text={"Mouse"}/>
                </DropDownSections>
                <DropDownSections name="Monitores">
                    <NavBarSections icon={<FontAwesomeIcon icon={faDesktop} />} text={"Monitores"}/> 
                </DropDownSections>
                <DropDownSections name="Auriculares">
                    <NavBarSections icon={<FontAwesomeIcon icon={faHeadphones} />}text={"Auriculares"}/>  
                </DropDownSections>
                <DropDownSections name="Computadoras">
                    <NavBarSections icon={<FontAwesomeIcon icon={faComputer} />}text={"Computadoras"}/> 
                </DropDownSections>
            </div>
        </div>
    )
}

const DropDownSections= props =>{
    return(
        <a href="#" className="sibling">
            <div className="border-solid border-slate-200 border-2 p-12 w-52 flex justify-center items-center rounded-sm">
                {props.children}
            </div>
        </a>
        
    )
}