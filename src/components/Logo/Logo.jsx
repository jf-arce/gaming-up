import { Link } from "react-router-dom"

export const Logo = ({className}) => {
  return (
    <div className='text-slate-100 flex justify-start items-center w-6/12'>
      <Link to="/"><p className={`${className} icon text-xl`}>Gaming Up</p></Link>
    </div>
  )
}
