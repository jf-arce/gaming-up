import {Item} from './Item'

export const ItemList = ({products}) => {
  
  return (
    <div className="flex justify-evenly items-start flex-wrap gap-y-12 flex-1">
      {products.map(prod =><Item 
          key={prod.id} 
          {...prod}
      />)}
    </div>
  )
}
