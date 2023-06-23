// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYs_Qsuty-Ch20l9Vq2rVV3r2hiFCQlDs",
  authDomain: "gaming-up-e62c8.firebaseapp.com",
  projectId: "gaming-up-e62c8",
  storageBucket: "gaming-up-e62c8.appspot.com",
  messagingSenderId: "765756710870",
  appId: "1:765756710870:web:ce5ce4206352cc198b4e77"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//connect to Firebase
const db = getFirestore(firebaseApp)

export async function getData(){
    const productsCollectionRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsCollectionRef);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map(doc =>{
        return {...doc.data(), id:doc.id }
    });
    return dataDocs;
}

export async function getItemData(id){
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
}


export async function getCategoryData(category){
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", category));
    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map(doc =>{
        return {...doc.data(), id:doc.id};
    });

    return dataDocs;
}