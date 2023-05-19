import {Item} from './Item'
import usePromise from '../../Hooks/usePromise'
import stock from '../../data/stock';

export const ItemList = () => {
 
  const products = usePromise(stock);

  return (
    <div className="flex justify-center items-center flex-wrap gap-16 w-[90%]">
      {products.map(prod =><Item 
          key={prod.id} 
          {...prod}
      />)}

    </div>
  )
}
