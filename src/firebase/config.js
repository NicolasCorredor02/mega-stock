import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDnBZgVHy81VmJKX5W00ysJeYzk5wTeGcE",
  authDomain: "mega-stock-db.firebaseapp.com",
  projectId: "mega-stock-db",
  storageBucket: "mega-stock-db.firebasestorage.app",
  messagingSenderId: "727214531859",
  appId: "1:727214531859:web:ce85cdb97f8a0a4f79a6e6"
}

export const app = initializeApp(firebaseConfig)