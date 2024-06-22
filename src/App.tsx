import { Home } from "./pages/Home"

import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { ContactPage } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {


  return (
    <main className="text-gray-400 bg-gradient-to-r from-light-blue via-bright-blue to-white ">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/proyect" element={<Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
   
  )
}

export default App
