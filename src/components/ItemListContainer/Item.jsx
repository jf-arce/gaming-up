import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ({nombre,precio,imagen,stock}) => {  
  return (
    <div className="bg-white w-80 h-[450px] flex flex-col justify-around items-center gap-5 rounded-sm">
      <a href=""><img src={imagen} alt={nombre} className="w-full object-cover h-[200px] p-5"/></a>
      <div className='bg-sky-600 flex flex-col justify-around items-center w-full h-full'>
        <a href=""><h3 className="text-center text-base text-white">{nombre}</h3></a>
        <p className="text-2xl text-white font-bold tracking-wider">$ {precio}</p>
        <ItemCount stock={stock}/>
      </div>
    </div>
  )
}
