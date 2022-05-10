import styled from "styled-components";
export const ItemDetailCont= styled.div`
margin: 2% auto;
padding:0 3%;
display: grid;
grid-template-columns: 2fr 2fr;
grid-template-rows: 1fr 2fr 1fr;
border-radius: 2px;
border: 3px solid;
border-color: #B16281;
height: 75vh;
width: 78%;
font-family: 'Libre Franklin', sans-serif;
`

export const TituloDetail = styled.h1`
grid-column: 2 / 3;
grid-row: 1/2;
width: 100%;
font-size: 5em;
margin: auto auto;
margin-left: 2%;
font-family: 'Libre Franklin', sans-serif;
font-weight: 800;
text-transform: capitalize;
`

export const ContenidoDetail = styled.div `
grid-row: 2/4;
grid-column: 2 / 3;
font-size: 100%;
font-family: 'Libre Franklin', sans-serif;
padding-right: 2%;
`
export const Parrafos = styled.p`
font-size: 1.6em;
`
export const Imagen = styled.img`
grid-column: 1/2;
grid-row: 1/4;
width: 100%;
max-width: 500px;
max-height: 60vh;
height: auto;
margin: auto auto;
margin-top: 10%;
margin-bottom: 2%;
padding-right: 2%;
border-radius: 2px;

`
