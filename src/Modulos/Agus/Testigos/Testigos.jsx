import React from "react";
import "./Testigos.css";

const Testigos = () => {
  return (
    <div className="trabajos-contenedor">
      <h1>NUESTROS TRABAJOS</h1>
      <div className="videos">
        <iframe
          width="270"
          height="150"
          src="https://www.youtube.com/embed/FuVef8tNs1U"
          title="strip dance"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="270"
          height="150"
          src="https://www.youtube.com/embed/ddDeubGyoKU?list=PLlym1G1foSEeVmtYcgXNgOQYpDJVkhsZC"
          title="Learn How To Dance Like Magic Mike - Sexy Dance Moves For Men (A Beginners Tutorial)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Testigos;
