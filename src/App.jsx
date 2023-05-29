//React
import React, { useState } from 'react'
//elements
import Home from './pages/home';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
//Layouts
import { NavBar } from "./components/NavBar/NavBar"
import { Dropdown } from './components/NavBar/Dropdown'
import { MenuResponsive } from './components/Responsive/MenuResponsive';
//Libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { TopBar } from './components/TopBar.jsx/TopBar';
import { Footer } from './components/Footer/Footer';

function App() {
  AOS.init();
  const [active,setActive] = useState(false);
  
  const dropDownEvent=()=>{
    setActive(!active);
  }

  return(
    <div className='App bg-lightBlack'>
      <BrowserRouter>
        <TopBar/>
        <NavBar evento={dropDownEvent}/>
        <MenuResponsive active={active} setActive={setActive}/>
        <Dropdown active={active} setActive={setActive}/>
        <main onClick={()=> setActive(false)} className='bg-gray-100'>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/category/all' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:id' element ={<ItemDetailContainer/>} />
            <Route path='*' element={<h1 className='absolute bottom-0'>Error 404: Page not found</h1>}/>
          </Routes>
        </main>  
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
