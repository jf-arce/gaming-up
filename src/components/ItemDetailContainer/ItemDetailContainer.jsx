import usePromise from "../../Hooks/usePromise"
import stock from "../../data/stock"

export const ItemDetailContainer = () => {

  const product = usePromise(stock)

  return (
    <div>
      
    </div>
  )
}
