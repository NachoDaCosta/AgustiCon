import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-info">
        <li>SERVICIOS</li>
        <li>CONTACTO</li>
        <li>SEXO YA</li>
      </ul>

      <img src="/Media/logo-agu.jpg" alt="" className="logo" />
      <div className="info">
        <a href="https://wa.me/+59898966785?text=Hola%20Divino%20me%20pasarias%20tu%20contacto%20y%20crema%20por%20la%20cola?">
          <img src="/Media/whatsapp.png" alt="" className="wpp" />
        </a>

        <div>CONTACTO</div>
      </div>
    </nav>
  );
};

export default Navbar;
