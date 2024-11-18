import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Menú */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } h-screen w-full fixed top-0 right-0 bg-white flex-col items-center justify-center sm:h-36 sm:w-auto sm:justify-between sm:right-5 p-4`}
      >
        {/* Botón para cerrar el menú */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-red-600 focus:outline-none"
        >
          ✕
        </button>

        <Link
          to="/"
          onClick={toggleMenu}
          className="text-red-600 text-lg hover:bg-red-400 rounded-lg p-2"
        >
          Home
        </Link>
        <Link
          to="/projects"
          onClick={toggleMenu}
          className="text-red-600 text-lg hover:bg-red-400 rounded-lg p-2"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="text-red-600 text-lg hover:bg-red-400 rounded-lg p-2"
        >
          Contact
        </Link>
      </div>

      {/* Botón hamburguesa */}
      {
        !isMenuOpen && (
                <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 text-2xl text-red-600 focus:outline-none"
      >
        ☰
      </button>
        )
      }

    </nav>
  );
};
