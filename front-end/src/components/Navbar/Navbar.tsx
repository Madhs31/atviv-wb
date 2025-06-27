// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
      <ul>
        <li>
          <Link to="/produto" onClick={toggleMenu}>Produtos</Link>
        </li>
        <li>
          <Link to="/servico" onClick={toggleMenu}>Serviços</Link>
        </li>
        <li>
          <Link to="/cliente" onClick={toggleMenu}>Clientes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
