import React, { useState } from 'react'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Dropdown } from './components/NavBar/Dropdown'
import { MenuResponsive } from './components/Responsive/MenuResponsive';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  const [active,setActive] = useState(false);

  const dropDownEvent=()=>{
    setActive(!active)
  }
  return (
    <div className="app">
      <NavBar evento={dropDownEvent}/>
      <main className='mt-24'>
        <MenuResponsive active={active}/>
        <Dropdown active={active}/>
        <Carrousel/>
        <ItemDetailContainer/>
        <ItemListContainer greeting="BIENVENID@ A GAMING UP"/>
      </main>
    </div>
  )
}

export default App
