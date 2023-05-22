export const NavBarSections =({text,event,icon})=>{
    return(
        <li className="text-slate-100 cursor-pointer text-center flex items-center justify-center" onClick={event}>
            <div className="w-4 text-lightBlue flex justify-center items-center">{icon}</div>
            <h3 className="underlineEffect mx-4">{text}</h3>
        </li>
    )
}