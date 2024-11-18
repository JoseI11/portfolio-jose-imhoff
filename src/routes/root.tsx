import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import icono from "../assets/icono_jose.png";
import { Footer } from "../components/Footer/Footer";

export const Root: React.FC = () => {
  return (
    <div className="app flex flex-col h-screen">
      {" "}
      {/* Flex aquí afecta a todas las páginas */}
      <header className="flex items-center justify-between  bg-gradient-to-r from-DarkOrange to-Orange">
        <div>
          <img src={icono} alt="Logo" />
        </div>

        <Navbar />
      </header>
      <main className="flex-1 flex justify-center items-center bg-gradient-to-r from-DarkOrange to-Orange">
        <Outlet />
        
      </main>
      <Footer/>
    </div>
  );
};
