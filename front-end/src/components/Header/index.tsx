// src/components/Header.tsx
import React, { useState } from "react"; // Importe useState
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./style.css";

interface HeaderProps {
  tema?: string;
}

const Header: React.FC<HeaderProps> = ({ tema }) => {
  // Use o hook useState para gerenciar o estado isMenuOpen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className={`container-header ${tema || ""}`}>
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <h1>🌸 World Beauty</h1>
          </Link>
        </div>

        {/* Botão hamburguer */}
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu} // Use a função diretamente
          aria-label="Abrir menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Passe o estado e a função de alternância como props para Navbar */}
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;