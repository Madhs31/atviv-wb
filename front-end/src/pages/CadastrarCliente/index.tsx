import React, { useState } from "react";
import { cadastrarCliente } from "../../services/clienteService";
import "./style.css";

const CadastroCliente: React.FC = () => {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [genero, setGenero] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoCliente = {
      nome: nome,
      nomeSocial: nomeSocial,
      genero: genero,
      cpf: cpf,
      rg: rg,
      telefone: telefone,
    };

    cadastrarCliente(novoCliente)
      .then(() => {
        alert("Cliente cadastrado com sucesso!");
        setNome("");
        setNomeSocial("");
        setGenero("");
        setCpf("");
        setRg("");
        setTelefone("");
      })
      .catch((erro) => {
        alert("Erro ao cadastrar cliente.");
        console.error(erro);
      });
  };

  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>Cadastre um cliente</h2>
      </div>
      <div className="form-cadastro">
        <form onSubmit={handleSubmit}>
          <p>Nome:</p>
          <input
            type="text"
            placeholder="Digite o nome do cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <p>Nome Social:</p>
          <input
            type="text"
            placeholder="Digite o nome social do cliente"
            value={nomeSocial}
            onChange={(e) => setNomeSocial(e.target.value)}
          />
          <p>Gênero:</p>
          <input
            type="text"
            placeholder="Digite o gênero do cliente"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
          <p>CPF:</p>
          <input
            type="text"
            placeholder="Digite o CPF do cliente"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <p>RG:</p>
          <input
            type="text"
            placeholder="Digite o RG do cliente"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
          <p>Telefone:</p>
          <input
            type="text"
            placeholder="Digite o telefone do cliente"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
