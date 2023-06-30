import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart"
import ImgPrueba from "../img/abos4.png"

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image imagen={ImgPrueba} />
            <Description title="Campera Edición Invierno 23"/>
            <div className="buttons">
                <ButtonDetalles />
                <ButtonAddCart />
            </div>

        </div>
    )
}
export default CardItem;