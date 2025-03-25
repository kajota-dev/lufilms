import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Accedemos a los valores del formulario usando el tipo adecuado
    const form = event.target as HTMLFormElement;

    const formData = {
      nombre: form.nombre.value,
      email: form.email.value,
      whatsapp: form.whatsapp.value,
      tipoNegocio: form.tipoNegocio.value,
      enfoqueNegocio: form.enfoqueNegocio.value,
      empleados: form.empleados.value,
      ambitoGeografico: form.ambitoGeografico.value,
      paquete: form.paquete.value,
    };

    // Enviar el correo usando EmailJS
    emailjs
      .send('service_ektff0s', 'template_8e526jq', formData, 'o_v7pTfKAu4jo0t6y')
      .then(
        (response) => {
          console.log('Éxito:', response);
          setFormSubmitted(true); // Mostrar mensaje de agradecimiento
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  };

  return (
    <section className="py-16 px-6 text-center">
      <div className="px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold">Contáctanos</h2>
        {formSubmitted ? (
          <div className="text-xl font-bold text-black">
            ¡Gracias por tu mensaje! Serás contactado pronto.
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
            />
            <input
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
           <input
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp"
          required
          pattern="(\+?\d{1,4}[\s\-]?)?(\(?\d{1,3}\)?[\s\-]?)?(\d{1,4}[\s\-]?)?(\d{1,4}[\s\-]?)?(\d{1,9})" 
          title="Por favor ingresa un número de teléfono válido"
        />


            {/* Tipo de negocio */}
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="tipoNegocio"
              required
            >
              <option value="" disabled selected>
                Tipo de negocio
              </option>
              <option value="pymes">PYMES</option>
              <option value="startup">Startup</option>
              <option value="empresa_grande">Empresa grande</option>
              <option value="restaurante">Restaurante</option>
              <option value="tienda_moda">Tienda de moda</option>
              <option value="empresa_tecnologia">Empresa de tecnología</option>
              <option value="eventos">Eventos</option>
              <option value="turismo">Turismo</option>
              <option value="otro">Otro</option>
            </select>

            {/* Enfoque de negocio */}
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="enfoqueNegocio"
              required
            >
              <option value="" disabled selected>
                Enfoque de tu negocio
              </option>
              <option value="servicios">Servicios</option>
              <option value="productos">Productos</option>
              <option value="tecnologia">Tecnología</option>
              <option value="consultoria">Consultoría</option>
              <option value="otro">Otro</option>
            </select>

            {/* Número de empleados */}
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="empleados"
              required
            >
              <option value="" disabled selected>
                Número de empleados
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </select>

            {/* Ámbito geográfico */}
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="ambitoGeografico"
              required
            >
              <option value="" disabled selected>
                Ámbito geográfico
              </option>
              <option value="local">Local</option>
              <option value="nacional">Nacional</option>
              <option value="internacional">Internacional</option>
            </select>

            {/* Paquete preferido */}
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="paquete"
              required
            >
              <option value="" disabled selected>
                ¿Qué paquete te interesa más?
              </option>
              <option value="paquete_profesional">Profesional</option>
              <option value="paquete_premium">Premium</option>
            </select>

            <button
              className="w-full p-2 bg-[#fffc04] font-bold rounded hover:bg-black hover:text-[#fffc04]"
              type="submit"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
