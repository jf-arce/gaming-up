import { useState,useEffect } from 'react';
import getData from '../../services/getData'
import {Item} from './Item'

export const ItemList = () => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    getData().then(data => setProducts(data));
  },[])

  return (
    <div className="flex justify-center items-center flex-wrap gap-16 w-10/12">
      {products.map(prod =><Item 
          key={prod.id} 
          {...prod}
      />)}

    </div>
  )
}
