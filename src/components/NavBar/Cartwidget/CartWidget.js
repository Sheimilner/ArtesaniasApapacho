import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {contexto} from '../../../Context/CartContext';
import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Circulo,Cantidad, Carrito, Todo} from './CartWidgetStyled';


function CartWidget () {
    const { cantidadItems, precioTotal} = useContext(contexto);
   
       
    return(
        <span>
            <Carrito>
                    <NavLink to="/cart"><ShoppingCartIcon color="secondary" fontSize="large"/></NavLink></Carrito>
                {
                cantidadItems === 0
                ? ''
                :<Todo>
                    
                    <Circulo>
                        <Cantidad>{cantidadItems}</Cantidad>
                    </Circulo>
                </Todo>
                }
        </span>

        
    );
};

export default CartWidget