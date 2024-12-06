import Footer from "./components/ui/Footer/Footer"
import Navbar from "./components/ui/Navbar/Navbar"
import PagesHome from "./pages/PagesHome/PagesHome"


function App() {

  return (
    <div className="MainLayout">
     <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-primary">
      <Navbar></Navbar>
     </header>
     <main className="pt-16 md:pt-40">
      <PagesHome></PagesHome>
     </main>
     <footer className="bg-foreground">
        <Footer></Footer>
     </footer>
    </div>
  )
}

export default App
