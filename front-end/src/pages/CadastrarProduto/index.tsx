import React from "react";
// import "./style.css"; // Assumindo que este arquivo CSS existe e está no mesmo diretório

const CadastroProduto: React.FC = () => {
  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>Cadastre um produto</h2>
      </div>
      <div className="form-cadastro">
        <form action="">
          <p>ID:</p>
          <input type="text" placeholder="Digite o ID do produto" />
          <p>Nome do Produto:</p>
          <input type="text" placeholder="Digite o nome do produto" />
          <p>Descriçao:</p>
          <input type="text" placeholder="Digite a descriçao do produto" />
          <p>Valor:</p>
          <input type="number" placeholder="Digite o valor do produto" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroProduto;