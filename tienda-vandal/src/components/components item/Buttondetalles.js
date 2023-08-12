import { Link } from "react-router-dom";

const ButtonDetalles = ({id}) => {
    return(
        <Link to={`/item/${id}`} id="detalles">Ver detalles</Link>
    )
}
export default ButtonDetalles;