import { Logo } from "../Logo/Logo"
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-darkBlack">
        <div className="max-w-[1180px] m-auto flex-col">
            <div className="flex flex-col lg:flex-row justify-between py-16 gap-10">
                <div className="flex flex-col items-center">
                    <Logo className="text-center"/>
                    <div className="flex items-center text-2xl text-gray-50 gap-5 mt-5">
                        <a href="/"><AiFillInstagram className="hover:text-lightBlue transition-colors"/></a>
                        <a href="/"><AiFillTwitterCircle className="hover:text-lightBlue transition-colors"/></a>
                        <a href="/"><BsFacebook className="text-xl hover:text-lightBlue transition-colors"/></a>
                        <a href="/"><FaTiktok className="text-xl hover:text-lightBlue transition-colors"/></a>
                    </div>
                </div>
                <div className="flex flex-col text-gray-50 text-sm text-center lg:text-start gap-2">
                    <Link to='/category/teclados' className="hover:text-lightBlue transition-colors">Teclados</Link>
                    <Link to='/category/mouse' className="hover:text-lightBlue transition-colors">Mouse</Link>
                    <Link to='/category/monitores' className="hover:text-lightBlue transition-colors">Monitores</Link>
                    <Link to='/category/auriculares' className="hover:text-lightBlue transition-colors">Auriculares</Link>
                    <Link to='/category/pc' className="hover:text-lightBlue transition-colors">Computadoras</Link>
                </div>
                <div className="text-gray-50 text-sm flex flex-col items-center lg:items-start gap-2">
                    <Link className="hover:text-lightBlue transition-colors" href="/">Preguntas Frecuentes</Link>
                    <Link className="hover:text-lightBlue transition-colors" href="/">Contacto</Link>
                    <div className="text-gray-50 flex flex-col items-center lg:items-start gap-2">
                        <div>
                            <a href="/" className="hover:text-lightBlue transition-colors">📞(221) 458-7589</a>
                        </div>
                        <div>
                            <a href="/" className="hover:text-lightBlue transition-colors">2215468712</a>
                        </div>
                        <div>
                            <a href="/" className="hover:text-lightBlue transition-colors">✉ gamingup@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="text-gray-300 flex justify-center text-[0.7em] p-2 border-t-[1px] border-gray-400">
                <h5>© Gaming Up 2023</h5>
            </div>
        </div>    
    </footer>
  )
}
