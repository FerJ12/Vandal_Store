import './style.css';
import NavBar from './components/header/NavBar';
import CardItem from './components/components item/CardItem';
import ContainerCardItems from './components/components item/ContainerCardItems';
import DetailsItem from './components/components item/DetailsItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (  
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ContainerCardItems /> }/>
            <Route path='/item/:id' element={<DetailsItem /> }/>
            <Route path='/category/:idCategory' element={<ContainerCardItems /> }/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
 