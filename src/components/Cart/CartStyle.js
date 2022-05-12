import styled from "styled-components"

export const ButtonFin= styled.button`
width: 10%;
border-radius: 5px;
justify-content: center;
vertical-align: middle;
font-size: 80%;
background-color: #F28B0C;
color: #F3FFF5; 
text-decoration: none !important;
margin-right: 1%;
border-color: #B16281;
&:hover{
cursor: hand;}
`
export const ButtonSeguir= styled.button`
height: 35px;
width: 150px;
border-radius: 5px;
vertical-align: middle;
justify-content: center;
font-size:16px;
background-color: #F28B0C;
color: #F3FFF5; 
text-decoration: none !important;
margin-right: 20px;
margin-left: 20px;
margin-bottom: 10px;
border-color: #B16281;
&:hover{
cursor: hand;}
 `

export const LineaItem = styled.div`
margin-top:3%;    
display: flex;
align-items: start;
width: 80%;
margin-left: 10%;
align-items: center;
justify-content: space-between;
vertical-align: middle;
border-radius: 2px;
border: 3px solid;
border-color: #B16281;
height: 15%;
font-family: 'Libre Franklin', sans-serif;`

export const Titulo = styled.h3`
margin-left: 1%;
font-size: 100%;
width: 100px;
font-family: 'Libre Franklin', sans-serif;`

export const Imagen= styled.img`
vertical-align: middle;
margin: 1% 0 1% 1%; 
height: 18%;
`

export const Final=styled.div`
align-items: center;
margin-left: 75%;
margin-right: 10%;
margin-top: 10vh;
`
export const Total = styled.p`
font-size: 0.5rem;
display: block;`

export const Info = styled.p`
font-size: 80%;
display: block;`

export const Compra=styled.div`
display: flex;
justify-content: center;
align-items: center;`

export const IrAlForm = styled.p`
font-size: 100%;
padding-left: 40%;
`