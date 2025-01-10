import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import PagesShop from "@pages/PagesShop/PagesShop";
import  PagesHome  from "@/pages/PagesHome/PagesHome";
import PagesCart from "@/pages/PagesCart/PagesCart";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./components/Main/Main";
import PagesDetail from "@/pages/PagesDetail/PagesDetail";

function App() {
  return (
    <div className="absolute-layout">
      <BrowserRouter>
          <Navbar />
        <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<PagesHome />}/>
              <Route path="/shop" element={<PagesShop />}/>
              <Route path="/shop/:category" element={<PagesShop />}/>
              <Route path="/product/:id" element={<PagesDetail />}/>
              <Route path="/cart/" element={<PagesCart />}/>
            </Route>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
