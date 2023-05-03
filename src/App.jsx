import React, { useState } from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { Dropdown } from './components/Dropdown'
import { MenuResponsive } from './components/MenuResponsive';

function App() {
  const [active,setActive] = useState(false);

  const dropDownEvent=()=>{
    setActive(!active)
  }
  return (
    <div className="app">
      <NavBar evento={dropDownEvent}/>
      <main className='relative'>
        <MenuResponsive active={active}/>
        <Dropdown active={active}/>
        <ItemListContainer greeting="BIENVENID@ A GAMING UP"/>
      </main>
    </div>
  )
}

export default App
