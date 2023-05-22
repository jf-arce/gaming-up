import {Item} from './Item'

export const ItemList = ({products}) => {
  
  return (
    <div className="flex justify-center items-center flex-wrap gap-16 xl:w-10/12">
      {products.map(prod =><Item 
          key={prod.id} 
          {...prod}
      />)}
    </div>
  )
}
