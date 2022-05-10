import React,{useState} from "react";
import {ButtonTerminar, MuestraCantidad, ItemCountContainer, ButtonSuma, ButtonAgregar, ButtonResta} from "./ItemCountStyle.js";
import {Link, NavLink} from 'react-router-dom';

function ItemCount ({stock,initial,onAdd}){
const [contador, setContador]=useState (initial);
;
//const [terminarCompra, setTerminarCompra] = useState(false);


const sumar=()=>{
contador<stock?
setContador(contador+1):setContador(contador)
}
const restar=()=>{
contador>0?
setContador(contador-1):setContador(contador)
}



return(
     
    <ItemCountContainer>
    <ButtonResta onClick={restar}>-</ButtonResta>
    <MuestraCantidad>{contador} </MuestraCantidad>
    <ButtonSuma onClick={sumar}>+</ButtonSuma>
    <ButtonAgregar onClick={()=>onAdd(contador)} >Agregar al carrito</ButtonAgregar>
    </ItemCountContainer>
    
    
)


}

export default ItemCount; 