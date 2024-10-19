import React from "react";
import "./Ofertas.css";

const Ofertas = () => {

  function saludo() {
    console.log("hola");
  }

  return (
    <main>
      <h1 onClick={saludo}>OFERTAS MACUMBERAS</h1>
      <p>2x1 EN SARABA</p>
      <p>3x2 EN APERTURA DE CAMINOS</p>
      <p>3x2 EN MALEFICIO AGENO</p>
    </main>
  );
};

export default Ofertas;
