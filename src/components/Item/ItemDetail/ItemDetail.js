import {
  Parrafos,
  TituloDetail,
  ContenidoDetail,
  ItemDetailCont,
  Imagen
} from "./ItemDetailStyle";
import ItemCount from "../ItemCount/ItemCount";
import React,{useState, useContext} from "react";
import {Link} from "react-router-dom";
import {ButtonTerminar} from "../ItemCount/ItemCountStyle.js";
import{contexto} from "../../../Context/CartContext";

function ItemDetail({producto}) {
const [terminarCompra, setTerminarCompra] = useState(false);
const {addItem}=useContext(contexto);
const [cantidad, setCantidad] = useState(0);



  const addToCart =(contador)=>{
    setCantidad(contador);
    addItem(producto, contador);
    setTerminarCompra(true);
    }
  
    return (
      <>
      {
        <ItemDetailCont key={producto.id}>
          
            <TituloDetail>{producto.nombre}</TituloDetail>
          
          <Imagen
              alt="imagen"
              src={producto.imagen}
            ></Imagen>
          
          <ContenidoDetail>
            <Parrafos>{producto.descripcion}</Parrafos>
            <Parrafos>
              <b>Precio: </b>
              <br></br> $ {producto.precio}
            </Parrafos>
            <Parrafos>
              <b>Stock:</b> <br></br>
              {producto.stock} unidades
            </Parrafos>
            {!terminarCompra ?
            <ItemCount stock={producto.stock} initial={1} onAdd={addToCart} /> :
            <Link to="/cart"><ButtonTerminar>Terminar Compra</ButtonTerminar></Link>}
          </ContenidoDetail>
        </ItemDetailCont>}
      </>
    );
  


  };



export default ItemDetail;