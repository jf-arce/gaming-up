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

  return (
    <CartContext.Provider value={{ addItem, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};
