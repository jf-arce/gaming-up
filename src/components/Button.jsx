export const Button = props => {
  return (
    <a href="">
        <button className='btn' style={props.style}>{props.text}</button>
    </a>
  )
}
