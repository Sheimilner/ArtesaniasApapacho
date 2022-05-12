import styled from "styled-components"

export const Form = styled.form`

display: flex;
flex-direction: column;
margin: 0 auto;
margin-left: 10%;
margin-top: 5%;
`
export const Label = styled.label`
display: block;
margin-top: 3%;
color: black;
font-size: 2vh;
margin: 0 auto;
margin-top: 1%;
margin-bottom: 1%;
`
export const Input = styled.input`
display: block;
background-color: #dcdfd6;
height: 6%;
width: 50%;
border: 1px solid;
margin: 0 auto;
margin-bottom: 1%;
`
export const Enviar = styled.button`
width: 20%;
height: 35px;
width: 150px;
border-radius: 5px;
border-color: #B16281;
vertical-align: middle;
justify-content: center;
font-size:16px;
background-color: #F28B0C;
color: #F3FFF5;
text-decoration: none !important;
margin: 0 auto;
&:hover{
cursor: hand;}
`
export const Titulo = styled.h1`
font-size: 3vh;
margin: 0 auto;
`
export const SubTitulo = styled.h2`
margin: 2% auto;
font-size: 2.5vh;
`