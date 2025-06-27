import React from "react";
// import "./style.css"; // Assumindo que este arquivo CSS existe e está no mesmo diretório

const CadastroServico: React.FC = () => {
  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>Cadastre um Serviço</h2>
      </div>
      <div className="form-cadastro">
        <form action="">
          <p>ID:</p>
          <input type="text" placeholder="Digite o ID do serviço" />
          <p>Nome do Serviço:</p>
          <input type="text" placeholder="Digite o nome do serviço" />
          <p>Descriçao:</p>
          <input type="text" placeholder="Digite a descriçao do serviço" />
          <p>Valor:</p>
          <input type="number" placeholder="Digite o valor do serviço" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroServico;