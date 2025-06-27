import React from "react";
import "./style.css";

const Banner: React.FC = () => {
  return (
    <div className="container-banner">
      <div className="text-and-image">
        <div className="text">
          <h2>World Beauty</h2>
          <p>
            Nosso sistema foi criado para tornar sua gestão mais simples: cadastre seus clientes, controle seus produtos e organize seus serviços em poucos cliques.
            Aproveite a experiência e deixe a tecnologia cuidar da parte chata, enquanto você foca na beleza do seu trabalho. 💅✨
          </p>
        </div>
        <img src="/logo.png" alt="Logo World Beauty" className="logo-large" />
      </div>
    </div>
  );
};

export default Banner;