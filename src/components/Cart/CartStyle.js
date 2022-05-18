import styled from "styled-components"
export const Content = styled.div`
margin-left: 2%;`

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
@media screen and (max-width: 1108px) {
    grid-column: 1/3;
    grid-row: 5/6;
    width: 80%;
    margin: auto auto;
}
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
font-family: 'Libre Franklin', sans-serif;
@media screen and (max-width: 1108px) {
    height: 30vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 2fr;
    
}`

export const Titulo = styled.h3`
margin-left: 1%;
font-size: 100%;
width: 100px;
font-family: 'Libre Franklin', sans-serif;
@media screen and (max-width: 1108px) {
    font-size: 150%;
    grid-column: 1/4;
    width: 100%;
    grid-row: 1/2;
    
}`

export const Imagen= styled.img`
vertical-align: middle;
margin: 1% 0 1% 1%; 
height: 18%;
@media screen and (max-width: 1108px) {
    grid-column: 1/2;
    grid-row: 2/5;
    width: 60%;
    height: auto;
}
`

export const Final=styled.div`
align-items: center;
margin-left: 75%;
margin-right: 10%;
margin-top: 10vh;
@media screen and (max-width: 1108px) {
    align-items: center;
margin: auto;
margin-left: 10%;

    
}`
export const Total = styled.p`
font-size: 0.5rem;
display: block;`

export const Info = styled.p`
font-size: 80%;
display: block;
@media screen and (max-width: 1108px) {
    grid-column: 2/4;
    grid-row: 2/3;
    margin-top: 2%;
}`
export const Info2 = styled.p`
font-size: 80%;
display: block;
@media screen and (max-width: 1108px) {
    grid-column: 2/4;
    grid-row: 3/4;
    margin-top: 2%;
    z-index: 1;
}`
export const Info3 = styled.p`
font-size: 80%;
display: block;
@media screen and (max-width: 1108px) {
    grid-column: 2/4;
    grid-row: 4/5;
    margin-top: 2%;
}`

export const Compra=styled.div`
display: flex;
justify-content: center;
align-items: center;`

export const IrAlForm = styled.p`
font-size: 100%;
padding-left: 40%;
`