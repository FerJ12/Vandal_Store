import { useContext } from "react";
import cartWhite from "../img/cart-white.svg"
import { listCartContext } from "./ProviderContextCart";

const ButtonAddCart = ({id}) => {

    let {addProduct} = useContext(listCartContext)

    return(
        <button id="addCart" onClick={ () => addProduct(id) }>
            <img src={cartWhite} alt="add"></img>
        </button>
    )
}
export default ButtonAddCart;