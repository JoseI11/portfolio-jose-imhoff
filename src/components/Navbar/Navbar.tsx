import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-center items-center">

      <div
        className=" gap-4"
      >
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
    </nav>
  );
};
