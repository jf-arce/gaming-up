import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { itemCount } = useCartContext();
  
  return (
    <div className="flex gap-3 items-center">
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ fontSize: "1.2em" }}
          className="cursor-pointer text-slate-200 hover:text-lightBlue hover:hover:transition-colors"
        />
      </Link>
      
      <span
        className="text-slate-100 text-sm"
        style={{ fontFamily: "Sans-Serif" }}
      >
        {itemCount()}
      </span>
    </div>
  );
};
