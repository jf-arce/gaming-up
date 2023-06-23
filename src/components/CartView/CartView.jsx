import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { CartProduct } from "./CartProduct";
import { Button } from "../Button/Button";

export const CartView = () => {
  const { itemCount, totalPrice, cart , delateItem, clearCart} = useCartContext();
 
  const handleDelateItem = (id) =>{
    delateItem(id);
  }

  const handleClearCart = () =>{
    clearCart()
  }

  if ( cart.length === 0 ){
    return(
      <div className="min-h-screen bg-gray-200 py-10">
        <div className="bg-white flex flex-col justify-center items-center px-10 py-5 rounded-sm m-auto max-w-[1280px]">
          <h1 className="text-center">El carrito esta vacío</h1>
          <div>
            <Link to="/" className="btn text-center">Descubrir productos</Link>
          </div>
        </div>
        <div className="max-w-[1180px] mx-auto p-10">
          <picture>
            <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
          </picture>
       </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex py-10 m-auto gap-3 max-w-[1280px] justify-between">
        <div className=" flex flex-grow flex-col gap-3">
          {cart.map((prod) => (
            <CartProduct key={prod.id} {...prod} handleDelateItem={handleDelateItem}/>
          ))}
        </div>
        <div className="bg-white p-5 flex flex-col gap-5 rounded-sm w-80">
          <h3 className="border-b-2 border-gray-200">Resumen de compra</h3>
          <div className="flex justify-between">
            <h4>Productos ({itemCount()})</h4>
            <h4>$ {totalPrice()}</h4>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>$ {totalPrice()}</h3>
          </div>
          <Link to="/checkout" className="btn text-center">Continuar compra</Link>
          <Button className="btn text-center cursor-pointer" onClick={handleClearCart} text="Vaciar carrito"/>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto p-10">
        <picture>
          <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
        </picture>
      </div>
    </div>
  );
};
