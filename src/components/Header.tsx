import React, { useState } from 'react';
import Logo from '@/assets/images/LogoFPCBlanco.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="w-full top-0 left-0">
            <div className="bg-white px-4 py-5 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-16 w-auto" src={Logo} alt="Logo" />
                    <h1 className="ml-3 text-xl font-bold">Faro Agencia Creativa</h1>
                </div>
                <div className="hidden sm:flex space-x-8">
                    <a href="#home" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">Home</a>
                    <a href="#quienes-somos" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-green-500 transition-all duration-300">Quienes Somos</a>
                    <a href="#nuestros-servicios" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-red-500 transition-all duration-300">Nuestros servicios</a>
                    <a href="#contactanos" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300">Contáctanos</a>
                </div>
                <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            <div
                className={`absolute top-0 left-0 h-screen w-full bg-white transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } transition ease-in-out duration-300 sm:hidden md:block`}
            >
                <button
                    type="button"
                    className="absolute top-5 right-5 p-2"
                    onClick={() => setIsOpen(false)}
                    title="Cerrar menú"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 010 1.06L10.94 12l-5.47 5.47a.75.75 0 111.06 1.06L12 13.06l5.47 5.47a.75.75 0 111.06-1.06L13.06 12l5.47-5.47a.75.75 0 11-1.06-1.06L12 10.94 6.53 5.47a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                    </svg>
                </button>
                <nav className="h-full flex-1 flex items-center justify-center">
                    <ul className="space-y-8">
                        <li><a onClick={() => setIsOpen(false)} href="#home" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">Home</a></li>
                        <li><a onClick={() => setIsOpen(false)} href="#quienes-somos" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-green-500 transition-all duration-300">Quienes Somos</a>  </li>
                        <li><a onClick={() => setIsOpen(false)} href="#nuestros-servicios" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-red-500 transition-all duration-300">Nuestros servicios</a> </li>
                        <li><a onClick={() => setIsOpen(false)} href="#contactanos" className="text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300">Contáctanos</a> </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
