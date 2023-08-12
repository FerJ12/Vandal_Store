import Image from "./Image";
import AddCantCart from "./AddCantCart";
import Description from "./Description";
import "../../styles/detailsItem.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimultion from "../../utils/fetchSimultion";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.find( flt => flt.id == id), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [id])
    
    return(
        <div className="detailsItem">

                        <div className="containerLeft">
                            {/*<Image 
                                imagen={datos.imageProduct.firtsImage}
                            />*/}
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {datos.title}
                                    parrafo= {datos.description}
                                    cantidad = {datos.stock}
                                    precio={datos.price}
                                />
                                
                            <div className="buttons">
                                    <AddCantCart
                                        cant={5}
                                    />        

                                    <ButtonDetalles 
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
        </div>
    )
}

export default DetailsItem;