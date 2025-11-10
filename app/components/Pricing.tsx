import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "./ContactForm";
import { BiDollar } from "react-icons/bi";
import { FaColonSign } from "react-icons/fa6";

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "CRC">("USD");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleCurrency = (c: "USD" | "CRC") => setCurrency(c);

  const prices = {
    USD: {
      emprendedor: "$399/mes",
      ventasRapidas: "$229/mes",
      redes: "$199/mes",
    },
    CRC: {
      emprendedor: "₡200,000/mes",
      ventasRapidas: "₡122,000/mes",
      redes: "₡98,300/mes",
    },
  } as const;

  return (
    <section className="bg-black text-center">
      {/* container responsive */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2">
          Servicios
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10">
          Seleccione el servicio ideal según su objetivo de venta.
        </p>

        {/* Selector de moneda */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <button
            className={`h-11 w-11 sm:h-12 sm:w-12 rounded-full text-2xl flex items-center justify-center transition-all outline-none ${
              currency === "USD"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => toggleCurrency("USD")}
            aria-label="Mostrar precios en USD"
            aria-pressed={currency === "USD"}
          >
            <BiDollar />
          </button>
          <button
            className={`h-11 w-11 sm:h-12 sm:w-12 rounded-full text-2xl flex items-center justify-center transition-all outline-none ${
              currency === "CRC"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => toggleCurrency("CRC")}
            aria-label="Mostrar precios en colones"
            aria-pressed={currency === "CRC"}
          >
            <FaColonSign />
          </button>
        </div>

        <p className="text-white/90 text-xs sm:text-sm mb-10">
          *Precio no incluye transporte ni inversión para pautas publicitarias.
        </p>

        {/* GRID (1 col en móvil, 2 col en ≥md) */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Card 1: Plan Emprendedor */}
          <Card className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1 focus-within:-translate-y-1 focus-within:shadow-2xl">
            <div className="flex flex-col h-full">
              <CardTitle className="text-left text-white px-5 sm:px-6 pt-5 sm:pt-6 text-xl sm:text-2xl font-semibold">
                Plan Emprendedor
              </CardTitle>
              <CardContent className="p-5 sm:p-6 text-left flex flex-col flex-1">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Ideal para quienes buscan posicionar su marca y generar contenido
                  con propósito.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <li>• Definición de oferta y propuesta de valor</li>
                  <li>• Creación de videos estratégicos y profesionales</li>
                  <li>• Plan de contenido mensual alineado a su cliente ideal</li>
                </ul>
                <div className="mt-6">
                  <p className="text-gray-300 text-xs sm:text-sm">Desde</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#fffc04]">
                    {prices[currency].emprendedor}
                  </p>
                </div>
                <Button
                  className="mt-6 w-full bg-[#fffc04] text-black hover:opacity-90 rounded-xl py-2 sm:py-2.5 text-base sm:text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#fffc04] focus-visible:ring-offset-black"
                  onClick={openModal}
                >
                  Iniciar hoy
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Card 2: Plan Ventas Rápidas */}
          <Card className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1 focus-within:-translate-y-1 focus-within:shadow-2xl">
            <div className="flex flex-col h-full">
              <CardTitle className="text-left text-black px-5 sm:px-6 pt-5 sm:pt-6 text-xl sm:text-2xl font-semibold">
                Plan Ventas Rápidas
              </CardTitle>
              <CardContent className="p-5 sm:p-6 text-left text-black flex flex-col flex-1">
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Diseñado para bienes raíces y vehículos: atraiga compradores
                  listos para cerrar.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                  <li>• Video + fotos con narrativa de venta</li>
                  <li>• Publicidad segmentada a su público objetivo</li>
                  <li>• Embudo de mensajes que filtra curiosos y destaca interesados</li>
                </ul>
                <div className="mt-6">
                  <p className="text-gray-700 text-xs sm:text-sm">Desde</p>
                  <p className="text-2xl sm:text-3xl font-extrabold">
                    {prices[currency].ventasRapidas}
                  </p>
                </div>
                <Button
                  className="mt-6 w-full bg-black text-white hover:bg-gray-900 rounded-xl py-2 sm:py-2.5 text-base sm:text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-white"
                  onClick={openModal}
                >
                  Iniciar hoy
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal de Compra */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-[2px] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Formulario de Compra
            </h3>
            <ContactForm />
            <Button
              className="w-full bg-red-500 text-white mt-4 hover:bg-red-400 rounded-xl focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
