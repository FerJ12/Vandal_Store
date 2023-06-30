import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <header>
          <div className="containerBrand">
  
          </div>
          <nav className="containerItemList">
          <ItemListContainer 
            itemUno = "Sneakers"
            itemDos = "Jeans"
            itemTres = "T-shirts"
            itemCuatro = "Jackets/Polo"
            itemCinco = "Outwear"
            itemSeis = "Accessories"
          />
          </nav>
          <div className="containerCart">
          <CartWidget />
          </div>
        </header>
    )
}

export default NavBar;