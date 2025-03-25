import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from './ContactForm';  // Importa el formulario de contacto

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 px-6 bg-black text-center">
      <h2 className="text-3xl text-white font-bold mb-4">Planes y Precio</h2>

      {/* Contenedor de las dos cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card Paquete Profesional */}
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
            Descuento 40%
          </div>
          <CardTitle className="text-2xl font-semibold text-center">Profesional</CardTitle>
          <CardContent className="p-4">
            <p className="text-lg mb-4">
              Perfecto para mejorar tu presencia en línea y atraer más clientes.
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="text-xl text-gray-500 line-through mr-2">$98.33</span>
              <p className="text-3xl font-bold text-black">$59/mes</p>
            </div>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%]">
              <li>2 videos y 8 imágenes de impacto</li>
              <li>Videos de alta calidad</li>
              <li>Edición profesional</li>
              <li>1 revisión gratuita</li>
              <li>Toma aérea con dron (10 segundos)</li>
            </ul>
            <Button
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 hover:opacity-80 rounded-lg py-2"
              onClick={openModal} 
            >
              ¡Comprar!
            </Button>
          </CardContent>
        </Card>

        {/* Card Paquete Premium */}
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
            Descuento 50%
          </div>
          <CardTitle className="text-2xl font-semibold text-center">Premium</CardTitle>
          <CardContent className="p-4">
            <p className="text-lg mb-4">
              Ideal para marcas que desean sobresalir y maximizar su impacto.
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="text-xl text-gray-500 line-through mr-2">$199</span>
              <p className="text-3xl font-bold text-black">$99.5/mes</p>
            </div>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%]">
              <li>4 videos y 15 imágenes profesionales</li>
              <li>Videos 4K de alta calidad</li>
              <li>Edición avanzada y creativa</li>
              <li>2 revisiones gratuitas</li>
              <li>Soporte prioritario</li>
              <li>Tomas aéreas con dron (hasta 30 segundos)</li>
            </ul>
            <Button
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 hover:opacity-80 rounded-lg py-2"
              onClick={openModal} 
            >
              ¡Comprar!
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[500px]">
            <h3 className="text-2xl font-semibold text-center mb-4">Formulario de Compra</h3>
            <ContactForm /> 
            <Button
              className="w-full bg-red-500 text-white mt-4 hover:bg-red-400"
              onClick={closeModal} 
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
