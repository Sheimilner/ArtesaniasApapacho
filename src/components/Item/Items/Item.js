import { ItemContainer, Nombre } from "./Itemstyle";
import { Link } from "react-router-dom";
import { ButtonAgregar } from "../ItemCount/ItemCountStyle";


function Item({ item: { id, nombre, descripcion, precio, stock, imagen } }) {
  
  

  return (
    <ItemContainer>
      <Nombre>{nombre}</Nombre>
      <img width={200} height={200} alt="imagen" src={imagen}></img>
      <p>Precio: $ {precio}</p>
      <p>Stock: {stock} unidades</p>
      <Link to={`/item/${id}`}>
        <ButtonAgregar>Detalles</ButtonAgregar>
      </Link>
      
    </ItemContainer>
  );
}

export default Item;
