import deleteWhite from "../img/deleteWhite.svg"
import "../../styles/itemCart.css"

const ItemCart = ({id, title, price, quantity, image}) => {
    return(
        <div className="itemCart">
            <div className="img">
                <img src={image} alt="img"></img>
            </div>

            <div className="description-cantidad">
                <span className="title"> {title} </span>
                <span className="quantity"> {`cantidad: ${quantity}`} </span>
            </div>

            <div className="price">
                <span className="subtotal">subtotal</span>
                <span className="price"> ${quantity * price} </span>
            </div>

            <button className="delete">
                <img src={deleteWhite}></img>
            </button>

        </div>
    )
}

export default ItemCart