import { useState } from 'react';
import { Link } from 'react-router-dom';

import iconjoseimhoff from '../../assets/Navbar icons/José_Imhoff-icon.jpg'
export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (

        <nav className="bg-gradient-to-l from-orange-500 via-amber-800 to-orange-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="#" className="text-white text-lg font-bold w-44 max-sm:w-32">
                    <img src={iconjoseimhoff} className="w-full object-cover object-center"></img>
                </Link>
                <div className="hidden md:flex space-x-4">

                    <Link to="/" className="text-white text-xl hover:bg-red-400 rounded-lg">Home</Link>
                    <Link to="#" className="text-white">|</Link>
                    <Link to="/proyect" className="text-white text-xl hover:bg-red-400 rounded-lg">Projects</Link>

                    <Link to="#" className="text-white">|</Link>
                    <Link to="/contact" className="text-white text-xl hover:bg-red-400 rounded-lg">Contact</Link>
                    <Link to="#" className="text-white">|</Link>
               
                </div>

                <div className=" md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white object-cover object-center focus:outline-none focus:text-white"
                    >
                        ☰
                    </button>
                </div>

                <div
                    className={`md:hidden absolute top-0 left-0 w-full bg-gradient-to-r to-indigo-400 via-blue-200 ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="flex flex-col items-center mt-16">
                        <a href="#" onClick={closeMenu}>☰</a>
                        <Link to="/" className="text-white mb-4">
                            Home
                        </Link>
                        <Link to="/proyect" className="text-white mb-4">
                            Proyects
                        </Link>
                        <Link to="/contact" className="text-white mb-4">
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </nav >

    );
}
