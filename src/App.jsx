import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import PagesHome from "@pages/PagesHome/PagesHome";
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
              <Route path="/category/:category" element={<PagesHome />}/>
              <Route path="/product/:id" element={<PagesDetail />}/>
            </Route>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
