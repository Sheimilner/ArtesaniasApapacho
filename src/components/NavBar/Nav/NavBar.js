import { useState, useEffect } from "react";
import {NavBarContainer, NavBarWrapper, Logo , Menu, MenuItem, IconLogoMobile } from "./NavBarStyle";
import logo from "./logo.jpeg";
import {FaBars, FaTimes} from "react-icons/fa";
import CartWidget from '../Cartwidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';
import {db} from "../../../Firebase/firebase";
import{getDocs, collection} from "firebase/firestore";


const NavBar =()=>{
    const [click, setClick]=useState(false);
    const [listCategorias, setListCategorias] = useState([]);
    const ChangeClick =()=>{
        setClick(!click);
    }
    const styleLink ={
    textDecoration: "none",
    color: "#F3FFF5", 
    }
    useEffect(() => {
        const categoriesCollection = collection (db, "Categorias");
        getDocs(categoriesCollection)
        .then((result) => {
          
          const categs=result.docs;
           
          const listNav = categs.map(categ => {
            const id= categ.id;
            const categoria = {
              id,
              ...categ.data()
            }
            return categoria;
          })
          
          setListCategorias(listNav);
        })
          
            
        
        
      }, []);
    
    
    return(
    <>
        <NavBarContainer>
            <NavBarWrapper>
                <NavLink to="/"><Logo><img src={logo} alt="" width={80} /></Logo></NavLink>
                <IconLogoMobile onClick={()=>ChangeClick()}>
                    {click?<FaTimes/>:<FaBars/>}
                    </IconLogoMobile>
                <Menu click={click}>
                    {listCategorias.map((category)=>{
                        return(
                        <MenuItem key={category.id}>
                            <NavLink style={styleLink} to={category.route} >
                                {category.Nombre}
                            </NavLink>
                        </MenuItem>
                        );
                    })}
                </Menu>
                <CartWidget />
                
            </NavBarWrapper>
        </NavBarContainer>
    </>
    )
}
export default NavBar;