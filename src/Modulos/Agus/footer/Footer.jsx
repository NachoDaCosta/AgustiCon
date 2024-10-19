import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="cliente">
        <h1>Algunos de nuestros clientes</h1>
        <img alt="" src="./Media/pablo.jpg" />
        <div className="texto">
          <p>
            "Que rico y lindo todo, agus un genio, una musculatura.. Ay que
            delicia. Seguro se vuelve pq quiero el final feliz que Agus me
            prometió, un atrevido... ay, solo de pensarlo se me moja la cola"
          </p>
          <span>Facundo Gomez - 2024</span>
        </div>
      </div>
      <div className="cliente">
        <h1>Tu opinión importa</h1>
        <img alt="" src="./Media/pablo-2.jpg" />
        <div className="texto">
          <p>
            "Agus un cremoso, después de viejo me pasó todo el jaboncito por la
            raja, me depiló y pasó cremita adoré el final feliz y seguro
            recomiendo 5⭐"
          </p>
          <span>Evaristo Rodriguez - 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
