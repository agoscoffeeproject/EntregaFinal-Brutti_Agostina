import { Link } from "react-router-dom";
import { useCarritoContext } from "./context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <button className="btn btn-primary cartWidget">
                    <Link to={'/cart'} className="nav-link">
                        <i><img src={`../img/cart.png`} alt="" className="img-fluid rounded-start cart"/></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito text-black">{getItemQuantity()}</span>}
                    </Link>
                        
            </button>
            
        </>
    );
}

export default CartWidget;