import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "./ContactForm";
import { BiDollar } from "react-icons/bi";
import { FaColonSign } from "react-icons/fa6";
import CountdownTimer from "./CountdownTimer";

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "CRC">("USD");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleCurrency = (newCurrency: "USD" | "CRC") =>
    setCurrency(newCurrency);

  const prices = {
    USD: { premium: "$139/mes", premiumOriginal: "$199/mes" },
    CRC: { premium: "₡74.900/mes", premiumOriginal: "₡107,000/mes" },
  } as const;

  return (
    <section className="py-16 px-6 bg-black text-center">
      <h2 className="text-3xl text-white font-bold mb-4">Servicios</h2>
      <p className="text-gray-400">Solo quedan:</p>
      <CountdownTimer />
      <p className="text-[#fffc04] font-semibold text-base">
        Para obtener el 30% de descuento en el plan Emprendedor
      </p>{" "}
      <br />
      {/* Selector de moneda */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`p-2 rounded-full text-xl flex items-center justify-center transition-all ${
            currency === "USD"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => toggleCurrency("USD")}
        >
          <BiDollar />
        </button>
        <button
          className={`p-2 rounded-full text-xl flex items-center justify-center transition-all ${
            currency === "CRC"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => toggleCurrency("CRC")}
        >
          <FaColonSign />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <CardTitle className="text-2xl font-semibold text-center">
            Contenido Visual para Emprendedores
          </CardTitle>
          <CardContent className="p-4">
            <p className="text-lg mb-4">
              Ideal para marcas que desean sobresalir y maximizar su impacto.
            </p>
            <div className="flex flex-col items-center mb-4">
              <p className="text-lg text-black">Desde:</p>
              <p className="text-lg text-gray-500 line-through">
                {prices[currency].premiumOriginal}
              </p>
              <p className="text-3xl font-bold text-black">
                {prices[currency].premium}
              </p>
            </div>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%]">
              <li>
                2 piezas audiovisuales creadas a la medida para atraer, conectar
                y convertir
              </li>
              <li>
                Producción profesional basada en los objetivos y estilo único de
                tu marca
              </li>
              <li>
                Guion, grabación y edición estratégica: nos encargamos de todo
              </li>
              <li>
                Contenido optimizado para captar la atención del consumidor
                digital actual
              </li>
              <li>
                Hasta 2 revisiones para pulir cada detalle según tu visión
              </li>
              <li>
                Filmación aérea con dron para potenciar el impacto visual y
                destacar en redes
              </li>
            </ul>
            <Button
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 hover:opacity-80 rounded-lg py-2"
              onClick={openModal}
            >
              Iniciar hoy
            </Button>
          </CardContent>
        </Card>
{/* 
        
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <CardTitle className="text-2xl font-semibold text-center text-white">
            Estrategia en Redes
          </CardTitle>
          <CardContent className="p-4 text-white">
            <p className="text-lg mb-4">
              Ideal si quiere llevar su presencia digital al siguiente nivel.
            </p>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%] space-y-2">
              <li>Campañas personalizadas alineadas a objetivos de venta</li>
              <li>
                Diseño de estrategia por embudos: atracción, conversión y cierre
              </li>
              <li>Contenido optimizado por etapa del cliente</li>
              <li>Gestión mensual de su marca en redes sociales</li>
              <li>
                Redireccionamiento estratégico a WhatsApp para facilitar ventas
              </li>
            </ul>
            <Button
              className="w-full bg-white text-indigo-700 hover:bg-gray-200 rounded-lg py-2"
              onClick={openModal}
            >
              Deseo agregar al plan
            </Button>
          </CardContent>
        </Card> 
    */}

        {/* Card: Sitio Web Profesional */}
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <CardTitle className="text-2xl font-semibold text-center text-white">
            Sitio Web Profesional
          </CardTitle>
          <CardContent className="p-4 text-white">
            <p className="text-lg mb-4">
              Para quienes desean presencia sólida y profesional en internet.
            </p>
            <div className="flex flex-col items-center mb-4">
              <p className="text-lg text-white">Desde:</p>
              <p className="text-3xl font-bold text-white">
                {currency === "USD" ? "$400" : "₡215.000"}
              </p>
            </div>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%] space-y-2">
              <li>Diseño moderno y enfocado en conversión</li>
              <li>Diseño para celular y computadora</li>
              <li>Incrementa la confianza y credibilidad de su marca</li>
              <li>
                Canal adicional para atraer clientes sin depender solo de redes
              </li>
              <li>Integración con WhatsApp, redes sociales y ubicación</li>
            </ul>
            <Button
              className="w-full bg-white text-gray-900 hover:bg-gray-100 rounded-lg py-2"
              onClick={openModal}
            >
              Deseo agregar al plan
            </Button>
          </CardContent>
        </Card>
      </div>
      {/* Modal de Compra */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[500px]">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Formulario de Compra
            </h3>
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
