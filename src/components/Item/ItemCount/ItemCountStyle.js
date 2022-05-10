import styled from "styled-components"
export const Button = styled.button`
background-color: #F28B0C;
font-size: 14;
color: #E7F2DF;
height: 35;
cursor: pointer;
border-radius: 5px;
`
export const ItemCountContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 2fr;
border-radius: 5px;
border: 3px solid;
border-color: #B16281;
height: 70px;
width: 250px;
text-align: center;


`

export const ButtonAgregar= styled.button`
height: 35px;
width: 250px;
border-radius: 5px;
grid-column: 1/4;
grid-row: 2/3;
font-size:22px;
margin-top: 2px;
background-color: #F28B0C;
color: #F3FFF5; 
text-decoration: none;

`
export const ButtonResta= styled.button`
width: 80px;
border-radius: 5px;
margin-left:5px;
height: 25px;
margin-top: 5px;
grid-column: 1/2;
grid-row: 1/2;
background-color: #F28B0C;
color: #F3FFF5; 
`
export const ButtonSuma= styled.button`
width: 80px;
border-radius: 5px;
max-width: 80px;
height: 25px;
margin-top: 5px;
grid-column: 3/4;
grid-row: 1/2;
background-color: #F28B0C;
color: #F3FFF5; 
`
export const MuestraCantidad= styled.p`
grid-column: 2/3;
grid-row: 1/2;
width: 80px;
margin:  auto;

`

export const ButtonTerminar= styled.button`
height: 35px;
width: 250px;
border-radius: 5px;
text-align: center;
justify-content: center;
vertical-align: middle;
font-size:22px;
background-color: #F28B0C;
color: #F3FFF5;
justify-content: center;
vertical-align: middle;
border-color: #B16281;

`