import Brand from "./Brand";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <header>
          <div className="containerBrand">
              <Brand/>
          </div>
          <nav className="containerItemList">
            <ItemListContainer 
              itemUno = " Zapas"
              itemDos = "Jeans"
              itemTres = "Remeras"
              itemCuatro = "Abrigos"/>
          </nav>
          <div className="containerCart">
          <CartWidget />
          </div>
        </header>
    )
}

export default NavBar;