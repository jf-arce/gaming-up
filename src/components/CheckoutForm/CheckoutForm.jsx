import { Button } from "../Button/Button";
import { useCartContext } from "../../context/CartContext";
import { createOrderWithStockUpdate } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";

export const CheckoutForm = () => {
  const { itemCount, totalPrice, clearCart, cart } = useCartContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleConfirm(event) {
    event.preventDefault();

    // Verificar si todos los campos están completos
    if (!name || !phone || !email) {
      setErrorMessage("Por favor completa todos los campos");
      return;
    }

    // Validar que el campo de teléfono solo contenga números
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage("Por favor ingresa solo números en el campo de teléfono");
      return;
    }

    const order = {
      items: cart,
      buyer: {
        name,
        phone,
        email,
      },
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      clearCart();
      navigateTo(`/order-confirmation/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row py-10 m-auto gap-3 max-w-[1280px] justify-between">
        <form
          onSubmit={handleConfirm}
          className="flex flex-col flex-grow bg-white p-5"
          data-aos="fade-up"
        >
          <h1>Completa tu compra</h1>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Nombre"
              className="p-3 border-2 border-gray-400 rounded-sm md:w-[80%]"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border-2 border-gray-400 rounded-sm md:w-[80%]"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="tel"
              placeholder="Telefono"
              className="p-3 border-2 border-gray-400 rounded-sm md:w-[80%]"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
              <Button className="btn" text="Comprar" />
            </div>
          </div>
        </form>
        <div className="bg-white p-5 flex flex-col gap-5 rounded-sm md:w-80">
          <h3 className="border-b-2 border-gray-200">Resumen de compra</h3>
          <div className="flex justify-between">
            <h4>Productos ({itemCount()})</h4>
            <h4>$ {totalPrice()}</h4>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>$ {totalPrice()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
