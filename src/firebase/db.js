import {
  doc,
  getDoc,
  limit,
  query,
  where,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "@/firebase/config";

const db = getFirestore(app);
const productsRef = collection(db, "products");
const categoriesRef = collection(db, "categories");

export const getProducts = async (category = null) => {
  let q;
  if (category) {
    q = query(productsRef, where("category", "==", category));
  } else {
    q = productsRef;
  }

  const querySnapshot = await getDocs(q);
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const getLimitProducts = async (limite) => {
  const q = query(productsRef, limit(limite));
  const products = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
};

export const getCategories = async () => {
  const querySnapshot = await getDocs(categoriesRef);
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push(doc.data());
  });

  return categories;
};
