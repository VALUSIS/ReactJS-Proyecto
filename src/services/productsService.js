import { db } from "../firebase"; 
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";



export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductsByCategory = async (category) => {
  const productsCol = collection(db, "products");
  const q = query(productsCol, where("category", "==", category));
  const productsSnapshot = await getDocs(q);
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const productDoc = doc(db, "products", id);
  const docSnap = await getDoc(productDoc);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};
