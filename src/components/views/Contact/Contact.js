import React, { useState } from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import GenericButton from "../../ui/buttons/GenericButton/GenericButton";
import "./Contact.scss";

const Contact = () => {
  // Estado para manejar los resultados de la solicitud
  const [message, setMessage] = useState("");

  // Función para enviar la solicitud POST
  const sendTestEmail = async () => {
    try {
      // Datos de prueba
      const response = await fetch(
        "https://all-in-backend.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Juan Pérez",
            email: "vlad12ps@gmail.com",
            message: "Vamooo mi pana.",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("¡El mensaje fue enviado correctamente!");
      } else {
        setMessage(`Error: ${data.message || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      setMessage("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="w-100 text-center mt-5">
        <GenericButton
          className="continue-button responsive-button"
          label="Enviar mensaje de prueba"
          width="14vw"
          onClick={sendTestEmail} // Llamamos a la función para enviar el mensaje
        />
        <div className="mt-3">
          {/* Mostrar el mensaje de confirmación o error */}
          {message && <p>{message}</p>}
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Contact;
