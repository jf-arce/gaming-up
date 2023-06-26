import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { CartProduct } from "./CartProduct";
import { ShoppingSummary } from "./ShoppingSummary";

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
      <div className="flex flex-col md:flex-row py-10 m-auto gap-3 max-w-[1280px] justify-between">
        <div className=" flex flex-grow flex-col gap-3" data-aos="fade-up">
          {cart.map((prod) => (
            <CartProduct key={prod.id} {...prod} handleDelateItem={handleDelateItem}/>
          ))}
        </div>
        <ShoppingSummary
          itemCount={itemCount}
          totalPrice={totalPrice}
          handleClearCart={handleClearCart}
        />
      </div>
      <div className="max-w-[1180px] mx-auto p-10">
        <picture>
          <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
        </picture>
      </div>
    </div>
  );
};
