import React, { useState } from "react";
import { Button } from "../components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Nuevos campos alineados a tus paquetes y segmentos
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [tipoNegocio, setTipoNegocio] = useState("");
  const [enfoqueNegocio, setEnfoqueNegocio] = useState("");
  const [empleados, setEmpleados] = useState("");
  const [ambito, setAmbito] = useState("");

  const togglePackage = (pkg: string) => {
    setSelectedPackages((prev) =>
      prev.includes(pkg) ? prev.filter((p) => p !== pkg) : [...prev, pkg]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const packagesText = selectedPackages.length
      ? selectedPackages.map((p) => `• ${p}`).join("\n")
      : "• Sin seleccionar";

    const message = `Hola, deseo más información sobre los siguientes servicios:

${packagesText}

🧑 Nombre: ${name}
📧 Correo: ${email}
📞 Teléfono: ${phone}

🧩 Tipo de proyecto: ${tipoProyecto || "No indicado"}
📌 Tipo de negocio: ${tipoNegocio || "No indicado"}
🎯 Enfoque del negocio: ${enfoqueNegocio || "No indicado"}
👥 Número de empleados: ${empleados || "No indicado"}
🌍 Ámbito geográfico: ${ambito || "No indicado"}

Quedo atento(a), gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "50685112743"; // Reemplace con su número real
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-6">
          ¿Listo para impulsar sus ventas?
          <br />
          Complete este formulario y continuamos por{" "}
          <span className="text-green-600">WhatsApp</span>.
        </h2>

        {/* Inputs básicos */}
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tipo de proyecto (segmento) */}
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tipoProyecto}
          onChange={(e) => setTipoProyecto(e.target.value)}
          required
        >
          <option value="" disabled>
            Tipo de proyecto
          </option>
          <option value="Marcas & Negocios">Marcas & Negocios</option>
          <option value="Bienes Raíces">Bienes Raíces</option>
          <option value="Vehículos">Vehículos</option>
        </select>

        {/* Paquetes (adaptados a tu oferta actual) */}
        <div>
          <p className="font-semibold mb-2">Seleccione los servicios:</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPackages.includes("Plan Emprendedor")}
                onChange={() => togglePackage("Plan Emprendedor")}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              Plan Emprendedor (contenido estratégico que convierte)
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPackages.includes("Plan Ventas Rápidas")}
                onChange={() => togglePackage("Plan Ventas Rápidas")}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              Plan Ventas Rápidas (bienes raíces / vehículos)
            </label>
          </div>
        </div>

        {/* Selects del negocio */}
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tipoNegocio}
          onChange={(e) => setTipoNegocio(e.target.value)}
          required
        >
          <option value="" disabled>
            Tipo de negocio
          </option>
          <option value="PYMES">PYMES</option>
          <option value="Startup">Startup</option>
          <option value="Empresa grande">Empresa grande</option>
          <option value="Restaurante">Restaurante</option>
          <option value="Tienda de moda">Tienda de moda</option>
          <option value="Empresa de tecnología">Empresa de tecnología</option>
          <option value="Eventos">Eventos</option>
          <option value="Turismo">Turismo</option>
          <option value="Otro">Otro</option>
        </select>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={enfoqueNegocio}
          onChange={(e) => setEnfoqueNegocio(e.target.value)}
          required
        >
          <option value="" disabled>
            Enfoque de su negocio
          </option>
          <option value="Servicios">Servicios</option>
          <option value="Productos">Productos</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Consultoría">Consultoría</option>
          <option value="Otro">Otro</option>
        </select>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={empleados}
          onChange={(e) => setEmpleados(e.target.value)}
          required
        >
          <option value="" disabled>
            Número de empleados
          </option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201+">201+</option>
        </select>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={ambito}
          onChange={(e) => setAmbito(e.target.value)}
          required
        >
          <option value="" disabled>
            Ámbito geográfico
          </option>
          <option value="Local">Local</option>
          <option value="Nacional">Nacional</option>
          <option value="Internacional">Internacional</option>
        </select>

        {/* Botón */}
        <Button
          type="submit"
          className="w-full bg-green-600 text-white hover:bg-green-500 rounded py-2"
        >
          Enviar a WhatsApp
        </Button>
      </form>
    </div>
  );
}
