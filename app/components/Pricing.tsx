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
    USD: {
      premiumOriginal: "$199/mes",
      premium: "$169.15/mes", // 199 - 15% = 169.15
    },
    CRC: {
      premiumOriginal: "₡107,000/mes",
      premium: "₡90,950/mes", // 107000 - 15% = 90950
    },
  } as const;

    const pricesSocialMedia = {
    USD: {
      premiumOriginal: "$199/mes",
    },
    CRC: {
      premiumOriginal: "₡98.300/mes",
    },
  } as const;

  return (
    <section className="py-16 px-6 bg-black text-center">
      <h2 className="text-3xl text-white font-bold mb-4">Servicios</h2>
      <p className="text-gray-400">Solo quedan:</p>
      <CountdownTimer />
      <p className="text-[#fffc04] font-semibold text-base">
        Para obtener el 15% de descuento en el plan Emprendedor
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
      <p className="text-white">Precio no incluye gastos de transporte ni inversión para pautas publicitarias</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Card className="w-full sm:w-[360px] md:w-[420px] bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <CardTitle className="text-2xl font-semibold text-center text-black px-4 pt-4">
            Contenido Estratégico para Emprendedores
          </CardTitle>
          <CardContent className="p-4">
            <p className="text-base text-black mb-4 text-center">
              No solo creamos contenido visual, construimos un mensaje que
              conecta y convierte.
            </p>

            <div className="bg-white rounded-lg p-4 shadow-inner mb-4">
              <h3 className="text-lg font-bold text-black mb-2">
                📉 Estrategia de Oferta Irresistible
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>
                  Definición de su <strong>propuesta de valor</strong> paso a paso
                </li>
                <li>
                  Identificación de su <strong>mercado objetivo</strong>
                </li>
                <li>
                  Claridad del <strong>resultado soñado</strong> de su cliente
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-inner mb-4">
              <h3 className="text-lg font-bold text-black mb-2">
                🎥 Producción de Video Estratégico
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>2 piezas audiovisuales guionizadas y personalizados según su negocio</li>
                <li>Sesiones de grabación (1-2 h c/u)</li>
                <li>Edición profesional con textos, música y subtítulos</li>
                <li>Formato vertical u horizontal para redes</li>
                <li>Hasta 2 revisiones incluidas</li>
                <li>Planeación de contenido mensual</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-inner mb-4">
              <h3 className="text-lg font-bold text-black mb-2">
                📸 Contenido Visual de Apoyo
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>Captura de imágenes atractivas de su negocio y entorno (8)</li>
                <li>
                  Clips de apoyo que complementan los mensajes principales
                </li>
                <li>2 Carruseles visuales que educan y generan confianza</li>
                <li>Estructura para destacar lo mejor de su marca</li>
              </ul>
            </div>

            <div className="flex flex-col items-center mb-4">
              <p className="text-base text-black">Desde:</p>
              <p className="text-base text-gray-700 line-through">
                {prices[currency].premiumOriginal}
              </p>
              <p className="text-3xl font-bold text-black">
                {prices[currency].premium}
              </p>
            </div>

            <Button
              className="w-full bg-black text-yellow-400 hover:bg-gray-900 hover:opacity-90 rounded-lg py-2 text-lg font-semibold"
              onClick={openModal}
            >
              Iniciar hoy
            </Button>
          </CardContent>
        </Card>

        
        
        <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <CardTitle className="text-2xl font-semibold text-center text-white">
            Manejo de Redes
          </CardTitle>
          <CardContent className="p-4 text-white">
            <p className="text-lg mb-4">
              Ideal si quiere llevar su presencia digital al siguiente nivel.
            </p>
            <ul className="list-disc text-left mb-6 mx-auto max-w-[80%] space-y-2">
              <li>Campañas publicitarias personalizadas alineadas a objetivos de venta</li>
              <li>
                Diseño de estrategia por embudos: atracción, conversión y cierre
              </li>
              <li>Contenido optimizado por etapa del cliente</li>
              <li>Gestión mensual de su marca en redes sociales</li>
              <li>
                Redireccionamiento estratégico a WhatsApp para facilitar ventas
              </li>
            </ul>

                          <p className="text-base text-black">Desde:</p>
              <p className="text-3xl font-bold text-black">
                {pricesSocialMedia[currency].premiumOriginal}
              </p>
            <Button
              className="w-full bg-white text-indigo-700 hover:bg-gray-200 rounded-lg py-2"
              onClick={openModal}
            >
              Deseo agregar al plan
            </Button>
          </CardContent>
        </Card> 
   

        {/* Card: Sitio Web Profesional */}
        {/* <Card className="w-full sm:w-[350px] md:w-[400px] bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
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
        </Card> */}
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
