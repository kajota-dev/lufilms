import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        {/* Logo centrado */}
        <div className="mb-4">
        <img 
  src="img/logoLuFilms.png" // Aquí debes colocar la ruta de tu logo
  alt="Logo de la empresa"
  className="h-10 mx-auto" // mx-auto centra el logo en su contenedor
/>
        </div>

        {/* Información de copyright */}
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
        </div>

        {/* Información sobre Costa Rica y Turrialba */}
        <div className="mt-4 text-sm">
          <p>
            Turrialba, Costa Rica{" "}
            <span role="img" aria-label="Bandera de Costa Rica">🇨🇷</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
