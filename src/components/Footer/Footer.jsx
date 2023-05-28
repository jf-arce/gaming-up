import { Logo } from "../Logo/Logo"
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="bg-darkBlack">
        <div className="w-10/12 m-auto flex-col">
            <div className="flex flex-col lg:flex-row justify-between p-10 gap-10">
                <div className="flex flex-col items-center">
                    <Logo className="text-center"/>
                    <div className="flex items-center text-2xl text-gray-50 gap-5 mt-5">
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                        <BsFacebook className="text-xl"/>
                        <FaTiktok className="text-xl"/>
                    </div>
                </div>
                <div className="flex flex-col text-gray-50 text-sm text-center lg:text-start">
                    <h4>Teclados</h4>
                    <h4>Mouse</h4>
                    <h4>Monitores</h4>
                    <h4>Auriculares</h4>
                    <h4>Computadoras</h4>
                </div>
                <div className="text-gray-50 text-sm flex flex-col items-center lg:items-start">
                    <h4>Contacto</h4>
                    <a href="">Preguntas Frecuentes</a>
                    <a href="">Contacto</a>
                    <div className="text-gray-50 flex flex-col items-center lg:items-start">
                        <div className="redes__container">
                            <i className="fa-solid fa-phone"></i>
                            <h4>📞(221) 458-7589</h4>
                        </div>
                        <div className="redes__container">
                            <i className="fa-brands fa-whatsapp"></i>
                            <h4>2215468712</h4>
                        </div>
                        <div className="redes__container">
                            <i className="fa-solid fa-envelope"></i>
                            <h4>✉ gamingup@gmail.com</h4>
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
