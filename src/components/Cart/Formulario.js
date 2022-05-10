import {useState} from "react";
import {Form, Label, Input, Enviar,Titulo, SubTitulo} from "./FormStyled";


function Formulario ({finalizarCompra}){


    const[comprador, setComprador]= useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""});



const handleSubmit= (e)=>{
    e.preventDefault();
    finalizarCompra(comprador);
}



function handleChange (e){
const {target}=e;
const {name, value}=target;
const nuevoComprador = {
    ...comprador,
    [name]: value,
};



setComprador(nuevoComprador);

};




return(
    
    <Form onSubmit={handleSubmit}>
    <Titulo>Dejanos a tus datos</Titulo>
    <SubTitulo>En los próximos días te estaremos contactando!</SubTitulo>
        <Label>Nombre</Label>
        <Input type="text" name="nombre" value={comprador.nombre} onChange={handleChange}/>
        <Label>Apellido</Label>
        <Input type="text" name="apellido" value={comprador.apellido} onChange={handleChange}/>
        <Label>Email</Label>
        <Input type="text" name="email" value={comprador.email} onChange={handleChange}/>
        <Label>Teléfono</Label>
        <Input type="number" name="telefono" value={comprador.telefono} onChange={handleChange}/>    
    
    <Enviar type="submit"  value="finalizar">Enviar</Enviar>
    
    </Form>
    
)




}


export default Formulario;

