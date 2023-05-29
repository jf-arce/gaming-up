import { Link } from "react-router-dom"

export const Button = props => {
  return ( 
    <Link 
      className={props.className}  
      style={props.style} 
      onClick={props.onclick} 
      disabled={props.disabled}
      to={`/item/${props.id}`}
    >{props.text}</Link>
  )
}
