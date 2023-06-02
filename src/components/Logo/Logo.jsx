import { Link } from "react-router-dom"

export const Logo = ({className}) => {
  return (
    <div className={`${className}text-slate-100 flex justify-center items-center w-[160px] xl:w-[180px]`}>
      <Link to="/">
        {/* <p className={`${className} icon text-xl`}>Gaming Up</p> */}
        <img src='/images/gaming-up-logo7.png' alt="GamingUp" />
      </Link>
    </div>
  )
}
