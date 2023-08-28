import "../../styles/containerCart.css";
import close from  "../img/close.svg";
import clear from   "../img/clear.svg";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import { listCartContext } from "../components item/ProviderContextCart";

const ContainerCart = () => {

    const { listCart, clearCart } = useContext(listCartContext)
    return(
        <div className="cart">

            <div className="cerrar">
                <button className="close">
                    <img src={close} alt="cerrar carrito"></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                    : listCart.map( product => ( 
                        <ItemCart 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.imageProduct.firtsImage}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }   
            </div>

            <div className ="TerminarCompra">
                <button className="terminar">Terminar Compra </button>
                <button className="clear">
                    <img src={clear} alt="vaciar carrito"></img>
                </button>
            </div>
        </div>
    )
}

export default ContainerCart