import styled from "styled-components";



export const NavBarContainer = styled.div`
width: 100%;
height: 100px;
position: sticky;
top: 0;
z-index: 99;
background-color: #F28B0C;
`
export const NavBarWrapper = styled.div`
margin: auto;
margin-left: 2%;
width: 100%;
max-width: 1500px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
export const Logo = styled.div`
width: 100px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
padding-left: 1rem;
margin-left: 0;
`

export const Menu = styled.ul`
height:35px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F28B0C;

@media screen and (max-width: 1108px){
    position: absolute;
    top: 70px;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    left: 0px;
    left: ${({click})=> (click? 0 : "-110%")};
    transition: 0.5s all ease-in;
    background-color: #F28B0C;
}
`
export const MenuItem = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: 'Libre Franklin', sans-serif;
font-weight: 400;


&:hover{
background-color: #050529;
border-bottom: 0.3rem solid #B16281;
transition: 0.4s ease-in;
@media screen and (max-width: 1108px){
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
}
`
export const MenuItemLink = styled.a`
text-decoration: none;
color: #F3FFF5; 
`
export const IconLogoMobile = styled.div`
display: none;
@media screen and (max-width: 1108px){
    display: flex;
    color: #050529;
    font-size: 2rem;
    padding-right: 1rem;
}
`