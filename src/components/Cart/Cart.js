import{contexto} from "../../Context/CartContext";
import { useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import { ButtonFin, LineaItem, ButtonSeguir, Titulo, Imagen, Final, Info, Compra} from "./CartStyle";
import {addDoc, collection, serverTimestamp, updateDoc, doc} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
import Formulario from './Formulario';
import 'react-toastify/dist/ReactToastify.css';


function Cart (){
const {itemsCart,deleteItem, cantidadItems, clearAll, precioTotal} = useContext(contexto);
const [idVenta, setIdVenta] = useState("");
const [showForm, setShowForm]=useState(false);
const [sinElementosEnCarrito, setSinElementosEnCarrito]=useState(true);
const [carrito, setCarrito]=useState(false);



useEffect(() => {
    if(itemsCart.length>0){
        setCarrito(true);
        setSinElementosEnCarrito(false);
        
    }
},[itemsCart]);

const handlerFinalizarCompra=()=>{
    setShowForm(true);
    setCarrito(false);
    setSinElementosEnCarrito(false);
}

const finalizarCompra = (comprador) => {
    const ventaCollection = collection(db, "ventas");
    addDoc(ventaCollection, {
        buyer: comprador,
        items: itemsCart,
        status: "generada",
        total: precioTotal,
        date:serverTimestamp()
    }).then(function(docRef){
        console.log("Document written with ID: ", docRef.id);
        setIdVenta(docRef.id);
        })
    .catch(()=>{console.error("Hay un error");})
    
    itemsCart.forEach((item)=>{
        const orderDoc = doc(db, "ItemCollection", item.id);
        const stockActualizado = item.stock - item.contador;
        updateDoc(orderDoc, {stock: stockActualizado});
    });
    
    clearAll();
    setShowForm(false);
    
};






const handlerRemove=(item) => {
    deleteItem(item);
    }
 



const handlervaciarCarro=()=>{
    clearAll();
    setCarrito(false);
    setSinElementosEnCarrito(true);
}


    return(
    <>
        <h1>Tu carrito</h1>
        {carrito && 
        <>
        <div> 
            {itemsCart.map(item => (

            <LineaItem key={item.id}>
                <Titulo>{item.nombre}</Titulo>
                <Imagen src={item.imagen} alt={item.nombre} width={80} height={80}/>
                <Info>Precio: $ {item.precio}</Info>
                <Info>Cantidad: {item.contador}</Info>
                <Info>Total: $ {item.contador*item.precio}</Info>
                <ButtonFin onClick={() => handlerRemove(item)}>Eliminar item</ButtonFin>
            </LineaItem>
            ))}
        </div>

        <Final>
            <p>Total de productos: {cantidadItems} </p>
            <p> Total a pagar: $ {precioTotal}</p>
            <ButtonSeguir onClick={handlervaciarCarro}>Vaciar Carrito</ButtonSeguir>
            <ButtonSeguir onClick={handlerFinalizarCompra}>Finalizar Compra</ButtonSeguir>
        </Final>
        
        </>
        }
        {sinElementosEnCarrito &&
        <>
        <h1>No hay elementos en el carrito</h1>
        <Compra>
             
            <Link to="/"><ButtonSeguir>Seguir comprando</ButtonSeguir></Link>
        </Compra> 
        </>
        }


            {showForm &&
            <Formulario finalizarCompra={finalizarCompra}/> }
            {!showForm && !carrito && !sinElementosEnCarrito &&

            <Compra>
                <h3>El ID de tu compra es: {idVenta}</h3>
                <br/>
                <Link to="/"><ButtonSeguir>Volver al inicio</ButtonSeguir></Link>
            </Compra> 
            }
              

            
            
        
    </>
    )
    
};


export default Cart;