import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <header>
          <div className="containerBrand">
  
          </div>
          <nav className="containerItemList">
          <ItemListContainer 
            itemUno = "ABRIGOS"
            itemDos = "PANTALONES"
            itemTres = "CALZADO"
            itemCuatro = "ACCESORIOS"
          />
          </nav>
          <div className="containerCart">
          <CartWidget />
          </div>
        </header>
    )
}

export default NavBar;