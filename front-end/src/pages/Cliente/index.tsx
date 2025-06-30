import React, { useEffect, useState, useMemo } from "react";
import { listarClientes, excluirCliente } from "../../services/clienteService";
import { Link } from "react-router-dom";
import "./style.css";

interface Endereco {
  estado?: string;
  cidade?: string;
}

interface Telefone {
  ddd?: string;
  numero: string;
}

interface ICliente {
  id: number;
  nome: string;
  sobreNome: string;
  telefones: Telefone[];
  email: string;
  endereco?: Endereco;
}

const Cliente: React.FC = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [filtro, setFiltro] = useState<string>("");

  useEffect(() => {
    async function fetchClientes() {
      try {
        const data = await listarClientes();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
        alert("Não foi possível carregar os clientes.");
      }
    }
    fetchClientes();
  }, []);

  const clientesFiltrados = useMemo(() => {
    return clientes.filter((cliente) => {
      const nomeCompleto = `${cliente.nome} ${cliente.sobreNome}`;
      return nomeCompleto.toLowerCase().includes(filtro.toLowerCase());
    });
  }, [clientes, filtro]);

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir este cliente?");
    if (!confirmar) return;

    try {
      await excluirCliente(id.toString());
      setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
      alert("Cliente excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      alert("Erro ao excluir cliente.");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Clientes</h2>
        <div className="search-session">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={filtro}
            onChange={handleSearchChange}
            className="input-busca"
          />
          <Link to="/cadastrocliente" style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Cliente</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="table-component" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Cidade/Estado</th>
              <th className="ultimacoluna">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome} {cliente.sobreNome}</td>
                <td>{cliente.email}</td>
                <td>
                  {cliente.telefones[0]
                    ? `${cliente.telefones[0].ddd ?? "-"} ${cliente.telefones[0].numero}`
                    : "-"}
                </td>
                <td>
                  {cliente.endereco?.cidade ?? "-"} / {cliente.endereco?.estado ?? "-"}
                </td>
                <td className="ultimacoluna">
                  <Link to={`/editarcliente/${cliente.id}`} title="Editar cliente">
                    <button className="botao-editar" style={{ marginRight: "8px" }}>
                      ✏️
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(cliente.id)}
                    className="botao-excluir"
                    title="Excluir cliente"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            {clientesFiltrados.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cliente;
