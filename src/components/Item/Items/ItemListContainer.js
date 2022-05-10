
import ItemList from "./ItemList";
import { useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import { ClipLoader } from "react-spinners";
import {db} from "../../../Firebase/firebase";
import{getDocs, collection, query, where, orderBy} from "firebase/firestore";
import {Greeting} from "./ItemListContainerStyled.js";





function ItemListContainer({greeting}) {
  const inicial = [];
  const [list, setList] = useState(inicial);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  
  

  useEffect(() => {
    const productsCollection = collection (db, "ItemCollection");
    let q;
    
        if(category === undefined){
          q = query(productsCollection, orderBy("nombre"));
        }else{
            q = query(productsCollection, where("categoria", "==", category))
        }
    getDocs(q)
    .then((result) => {
      
      const docs=result.docs;
       
      const list = docs.map(doc => {
        const id= doc.id;
        const product = {
          id,
          ...doc.data()
        }
        return product;
      })
      
      setList(list);
    })
      .finally(()=> {
        setLoading(false);
      });
      
    

    
    
  }, [category]);

  

  return (
    <>
      <Greeting>{greeting}</Greeting>
      {loading ? (
        <span>
            <ClipLoader color="green" loading={loading} size={150}>    </ClipLoader>
        </span>  
      ) : (<ItemList list={list}></ItemList>)
        }
      
    </>
  );

  
};

export default ItemListContainer;
