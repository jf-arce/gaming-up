import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { CartProduct } from "./CartProduct";

export const CartView = () => {
  const { itemCount, totalPrice, cart , delateItem} = useCartContext();

  const handleDelateItem = (id) =>{
    delateItem(id);
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
            <h4>{totalPrice()}</h4>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>{totalPrice()}</h3>
          </div>
          <Link className="btn text-center">Continuar compra</Link>
        </div>
      </div>
    </div>
  );
};
