import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agregar al carrito. Si el producto ya fue agregado se suma la cantidad a llevar
  const addItem = (product, amount) => {
    const itemExist = cart.findIndex((prod) => prod.id === product.id);
    if (itemExist !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemExist].amount += amount;
      setCart(updatedCart);
    } else {
      const prod = { ...product, amount };
      setCart([...cart, prod]);
    }
  };

  //Contador de cantidad de productos que se agrego al carrito
  const itemCount = () => 
    cart.reduce((totProd, prod) => totProd + prod.amount, 0);

  //Precio total de productos a llevar
  const totalPrice = () => 
    cart.reduce((totPrice, prod) => totPrice + (prod.price*prod.amount), 0);

  //Eliminar producto del carrito
  const delateItem = (id) =>{
    const newCart = cart.filter((prod) => prod.id !== id);
    const updatedCart = [...newCart];
    setCart(updatedCart);
  }
  return (
    <CartContext.Provider value={{ addItem, itemCount, totalPrice, cart, delateItem}}>
      {children}
    </CartContext.Provider>
  );
};
