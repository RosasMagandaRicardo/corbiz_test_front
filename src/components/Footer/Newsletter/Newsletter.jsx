import React, { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  let [nombre, setNombre] = useState("");
  let [correo, setCorreo] = useState("");

  const sentPetition = (event) => {
    event.preventDefault();
    let url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
    let data = { name: nombre, email: correo };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        window.alert(response.message);
        setNombre("");
        setCorreo("");
      });
  };

  return (
    <div className="newsletterContainer">
      <h3 className="newsletterTitle">¡Únete a nuestras novedades y promociones!</h3>
      <form className="formNewsLetter" onSubmit={sentPetition}>
        <input
          className="inputNombre"
          value={nombre}
          type="text"
          placeholder="Ingresa tu nombre"
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="inputEmail"
          value={correo}
          type="email"
          placeholder="Ingresa tu email"
          required
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button className="buttonSubmitForm" type="submit">Suscribirme</button>
      </form>
    </div>
  );
};

export default Newsletter;
