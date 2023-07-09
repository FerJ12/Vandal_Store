import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <Link to="category/Zapas">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Jeans">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Remeras">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Abrigos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;