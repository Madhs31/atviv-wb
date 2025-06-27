import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Estatistica: React.FC = () => {
  return (
    <div className="session-estatistica">
      <h2>Acessar Estatisticas</h2>
      <div className="card-estatistica">
        <div className="text-estatistica">
          <h2>Listagens</h2>
          <br />
          <div>
            <p>
              Aqui você podera acessar as listagem de clientes, produtos e
              serviços, para anáise mais detalhada clique no botão abaixo!
            </p>
          </div>
          <br />
          <Link to={"/estatistica"}>
            <button className="card-button">Painel de Controle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estatistica;