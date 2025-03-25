import { useState } from "react";

export function Navbar({ scrollToContact }: { scrollToContact: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo con letras (siempre visible) */}
        <div className="flex items-center space-x-8">
          <img
            src="img/letraLuFilms.png"
            alt="Logo con letras"
            className="max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] object-contain"
          />
        </div>

        {/* Logo principal centrado solo en pantallas grandes */}
        <div className="hidden md:flex justify-center flex-grow absolute left-1/2 transform -translate-x-1/2">
          <img src="img/logoLu.png" alt="Logo principal" className="h-10" />
        </div>

        {/* Icono de hamburguesa (visible solo en pantallas pequeñas) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center bg-black py-4 w-full`}
      >
        {/* Logo con letras (siempre visible) */}
        <img
          src="app/img/logoLu.png"
          alt="Logo con letras"
          className="max-w-[60px] max-h-[120px] md:max-w-[50px] md:max-h-[50px] object-contain mb-4"
        />
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={scrollToContact}
            className="bg-[#fffc04] text-black hover:bg-[#fffc04] hover:opacity-80 px-6 py-2 rounded-md"
          >
            Agenda ahora
          </button>
        </div>
      </div>
    </nav>
  );
}
