
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";






  const firebaseConfig = {
    apiKey: "AIzaSyBrWsVBV7pXTal1kSsKr4mB4tKQN-pKSco",
    authDomain: "tienda-de-artesanias.firebaseapp.com",
    projectId: "tienda-de-artesanias",
    storageBucket: "tienda-de-artesanias.appspot.com",
    messagingSenderId: "42048660051",
    appId: "1:42048660051:web:1489bbd07d8ace32559ca6"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

