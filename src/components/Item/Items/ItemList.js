
import Item from "./Item";




const ItemList =({list})=>{

    return(
        <>
            {list.map(product=>
            <Item key={product.id} item={product}/>)}
        </>
    )
};



export default ItemList;