import styled from "styled-components";
export const ItemDetailCont= styled.div`
margin: 2% auto;
padding:0 3%;
display: grid;
grid-template-columns: 3fr 2fr;
grid-template-rows: 1fr 2fr 1fr;
border-radius: 2px;
border: 3px solid;
border-color: #B16281;
width: 78%;
font-family: 'Libre Franklin', sans-serif;
padding-bottom: 2%;

@media screen and (max-width: 1108px){
display: grid;
grid-template-rows: 1fr 2fr 1fr 1fr 2fr;   
height: 75vh;
}
`

export const TituloDetail = styled.h1`
grid-column: 2 / 3;
grid-row: 1/2;
width: 100%;
font-size: 300%;
margin: auto auto;
margin-left: 2%;
font-family: 'Libre Franklin', sans-serif;
font-weight: 800;
text-transform: capitalize;
@media screen and (max-width: 1108px){
grid-row: 1/2;
grid-column: 1/3;    
font-size: 200%;
}
`

export const ContenidoDetail = styled.div `
grid-row: 2/4;
grid-column: 2 / 3;
font-size: 100%;
font-family: 'Libre Franklin', sans-serif;
padding-right: 2%;
padding-left: 3%;
@media screen and (max-width: 1108px){
grid-row: 3/6;
margin-top: -105%;    
font-size: 75%;
}
`
export const Parrafos = styled.p`
font-size: 150%;

`
export const Imagen = styled.img`
grid-column: 1/2;
grid-row: 1/4;
width: 80%;
max-width: 500px;
max-height: 60vh;
height: auto;
margin: auto auto;
margin-top: 10%;
margin-bottom: 2%;
padding-right: 2%;
border-radius: 5px;
@media screen and (max-width: 1108px){
grid-row: 2/3;
grid-column: 1/3;
height: 30%;
width: auto;
margin-bottom: 1%;
}
`
