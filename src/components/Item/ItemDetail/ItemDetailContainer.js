import ItemDetail from "./ItemDetail";
import { useState, useEffect, useContext } from "react";
import { useParams} from "react-router-dom";
import { ClipLoader } from "react-spinners";
import contexto from "../../../Context/CartContext";
import {db} from "../../../Firebase/firebase";
import{getDoc, collection, doc} from "firebase/firestore";



  
  function ItemDetailContainer () {
    const inicial = [];
    const [producto, setProducto] = useState(inicial);
    const [loading, setLoading] = useState(true);
   
    const { id } = useParams();
    
    useEffect(() => {
      const productsCollection = collection (db, "ItemCollection");
      const refDoc = doc(productsCollection, id);
      getDoc(refDoc)
      .then((result) => {
          const product = {
              id,
              ...result.data()
          }
          
          setProducto(product);
          setLoading(false);
    })
        .catch(() => {
          console.log("error");
        })
        .finally(()=>{
          setLoading(false);
      });
    }, [id]);



      
      return(
        <>
        {loading ? (
        <span>
            <ClipLoader color="green" loading={loading} size={150}>    </ClipLoader>
        </span>  
      ) : (<ItemDetail producto={producto}
        ></ItemDetail>)
        }
        
        
        </>
  );
  };
  
  export default ItemDetailContainer;