import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart"
import ImgPrueba from "../img/abos4.png"

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image 
                imagen={props.imagen} 
                />
            <Description 
                title= {props.title}
                cantidad = {props.cantidad}
                precio = {props.precio}
                />
            <div className="buttons">
                <ButtonDetalles id={props.id}/>
                <ButtonAddCart />
            </div>

        </div>
    )
}
export default CardItem;