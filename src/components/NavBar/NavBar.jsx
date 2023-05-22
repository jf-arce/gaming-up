import { Nav } from './Nav'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from '../CartWidget/CartWidget'
import { Logo } from '../Logo/Logo'
import { useHideTopBar } from '../../Hooks/useHideTopBar'

export const NavBar = ({evento}) => {
  
  const isScrolled = useHideTopBar(44);

  return (
    <header className={`h-24 flex items-center justify-center bg-darkBlack w-full ${isScrolled ? 'sticky top-0 z-20' : 'relative z-20'}`}>
      <div data-aos="fade-down" className='grid grid-cols-2 xl:grid-cols-3 w-9/12 mx-auto'>
        <Logo/>
        <Nav evento={evento}/>
        <div className='hidden justify-end items-center gap-7 xl:flex'>
          <Button text="Log in" className="btn"/>
          <CartWidget/>
        </div>
        {/* MENU RESPONSIVE */}
        <div className='flex justify-end items-center xl:hidden 2xl:hidden cursor-pointer'>
          <FontAwesomeIcon icon={faBars} className='text-slate-100 text-xl' onClick={evento}/>
        </div>
      </div>
    </header>
  )
}


