import { createContext, useState, useContext, useEffect } from "react";
export const contexto = createContext();
export const useValueContext = ()=> useContext(contexto);
const { Consumer, Provider } = contexto;


const CustomProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);
  const [cantidadItems, setCantidadItems] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [venta,setVenta]=useState ({});



  const addItem = (producto, contador) => {
    const newProducto = {...producto, contador};
    const isInCart = itemsCart.find((item) => item.id === producto.id);
    if (isInCart)  {
      const productFind = itemsCart.find(producto => producto.id === newProducto.id);
        const index = itemsCart.indexOf(productFind);
        const newItemsCart = [...itemsCart];
        newItemsCart[index].contador += contador;
        setCantidadItems(cantidadItems + contador);
        setPrecioTotal(precioTotal + producto.precio * contador);
    } else{
      setItemsCart([...itemsCart, newProducto])
      setCantidadItems(cantidadItems + contador);
      setPrecioTotal(precioTotal + producto.precio * contador);
      
    };




};

  
  const deleteItem = (item) => {
    const itemAEliminar=item
    setCantidadItems(cantidadItems - itemAEliminar.contador);
      setPrecioTotal(precioTotal - (itemAEliminar.precio * itemAEliminar.contador));
      itemsCart.splice(
          itemsCart.findIndex((e) => e.id === item.id),1)
          setItemsCart([...itemsCart]);
      };


  const clearAll = () => {
     setItemsCart([]);
     setCantidadItems(0);
     setPrecioTotal(0);
  }
  


  

  return (
    <Provider value={{ itemsCart, addItem, deleteItem, cantidadItems, clearAll, precioTotal }}>
      
      {children}
    </Provider>
  );
};

export default CustomProvider;