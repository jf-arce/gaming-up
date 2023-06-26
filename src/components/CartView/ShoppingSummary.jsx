import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const ShoppingSummary = ({ itemCount, totalPrice, handleClearCart }) => {
  return (
    <div className="bg-white p-5 flex flex-col gap-5 rounded-sm md:w-80 w-full">
      <h3 className="border-b-2 border-gray-200 text-center">Resumen de compra</h3>
      <div className="flex justify-between">
        <h4>Productos ({itemCount()})</h4>
        <h4>$ {totalPrice()}</h4>
      </div>
      <div className="flex justify-between">
        <h3>Total</h3>
        <h3>$ {totalPrice()}</h3>
      </div>
      <Link to="/checkout" className="btn text-center">
        Continuar compra
      </Link>
      <Button
        className="btn text-center cursor-pointer"
        onClick={handleClearCart}
        text="Vaciar carrito"
      />
    </div>
  );
};
