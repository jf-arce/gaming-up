export const Button = props => {
  return ( 
    <button 
      className={props.className}  
      style={props.style} 
      onClick={props.onclick} 
      disabled={props.disabled}
      
    >{props.text}</button>
  )
}
