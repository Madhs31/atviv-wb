import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  icon?: string; // mudou de 'image' para 'icon' para refletir o que vem da Home (opcional)
  descricao: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, icon, descricao, link }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      {icon && <img src={icon} alt={`${title} icon`} className="card-icon" />} {/* Renderiza o ícone se ele existir */}
      <p className="card-description">{descricao}</p>
      <Link to={link} style={{ color: "inherit" }}>
        <button className="card-button">Página de {title}</button>
      </Link>
    </div>
  );
};

export default Card;