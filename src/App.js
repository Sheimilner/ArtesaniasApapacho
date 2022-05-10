import ItemDetailContainer from "./components/Item/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/Item/Items/ItemListContainer";
import NavBar from "./components/NavBar/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Cart from "./components/Cart/Cart.js";
import { Error } from "./components/Error/Error";
import  CustomProvider  from "./Context/CartContext";


function App() {
  const greeting = "Bienvenid@ a la tienda de Artesanías Apapacho";
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route
            path="categories/:category"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
