// ProdutoServico.tsx
import React, { useState } from "react"; // Importe useState
import "./style.css";

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  produto: string;
  servico: string;
  genero?: string;
}

interface ProdutoServico {
  nome: string;
  quantidade: string;
  genero?: string;
}

const EstatisticaPage: React.FC = () => {
  // Use useState para gerenciar cada parte do estado
  const [clientesMaisConsumiramQnt] = useState<Cliente[]>([
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", produto: "34", servico: "18" },
    { id: 2, nome: "Teste da Silva", cpf: "123.456.092-00", produto: "23", servico: "11" },
    { id: 3, nome: "Ana Maria", cpf: "321.456.789-99", produto: "20", servico: "14" },
    { id: 4, nome: "Carlos Souza", cpf: "444.555.666-00", produto: "19", servico: "10" },
  ]);

  const [clientesMenosConsumiramQnt] = useState<Cliente[]>([
    { id: 5, nome: "José Lima", cpf: "555.444.333-00", produto: "1", servico: "0" },
    { id: 6, nome: "Clara Gomes", cpf: "111.222.333-44", produto: "2", servico: "1" },
    { id: 7, nome: "Renata Silva", cpf: "999.888.777-66", produto: "3", servico: "2" },
  ]);

  const [clientesMaisConsumiramValor] = useState<Cliente[]>([
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", produto: "R$ 4040,99", servico: "R$ 1200,99" },
    { id: 2, nome: "Teste da Silva", cpf: "123.456.092-00", produto: "R$ 3900,89", servico: "R$ 900,99" },
    { id: 3, nome: "Ana Maria", cpf: "321.456.789-99", produto: "R$ 3100,00", servico: "R$ 1000,00" },
    { id: 4, nome: "Carlos Souza", cpf: "444.555.666-00", produto: "R$ 2500,00", servico: "R$ 500,00" },
    { id: 5, nome: "Fernanda Lopes", cpf: "333.222.111-00", produto: "R$ 2000,00", servico: "R$ 800,00" },
  ]);

  const [clientesPorGenero] = useState<Cliente[]>([
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", produto: "34", servico: "18", genero: "Masculino" },
    { id: 2, nome: "Ana Maria", cpf: "321.456.789-99", produto: "20", servico: "14", genero: "Feminino" },
    { id: 3, nome: "Carlos Souza", cpf: "444.555.666-00", produto: "19", servico: "10", genero: "Masculino" },
    { id: 4, nome: "Renata Silva", cpf: "999.888.777-66", produto: "3", servico: "2", genero: "Feminino" },
  ]);

  const [produtosMaisConsumidos] = useState<ProdutoServico[]>([
    { nome: "Sérum Iluminador com Pérolas de Ouro", quantidade: "100" },
    { nome: "Creme Anti-Idade com Peptídeos Inteligentes", quantidade: "88", genero: "Feminino" },
    { nome: "Shampoo Detox com Carvão Vegetal", quantidade: "75", genero: "Masculino" },
    { nome: "Leave-in Reconstrutor com Queratina", quantidade: "70" },
  ]);

  const [servicosMaisConsumidos] = useState<ProdutoServico[]>([
    { nome: "Hidratação Facial com Máscara de Ouro", quantidade: "85" },
    { nome: "Massagem Relaxante com Aromaterapia", quantidade: "65", genero: "Feminino" },
    { nome: "Design de Barba com Toalha Quente", quantidade: "50", genero: "Masculino" },
    { nome: "Peeling de Diamante com Clareamento", quantidade: "40" },
  ]);

  return (
    <div className="container-estatisticas">
      <h2>Estatísticas e Listagens</h2>

      {/* Top 10 por quantidade */}
      <div className="title-top-10">
        <p>Top 10 clientes que mais consumiram <b>em quantidade</b>.</p>
      </div>
      <TableComponent clientes={clientesMaisConsumiramQnt} />

      {/* Menor consumo por quantidade */}
      <div className="title-top-10">
        <p>10 clientes que menos consumiram <b>em quantidade</b>.</p>
      </div>
      <TableComponent clientes={clientesMenosConsumiramQnt} />

      {/* Por valor */}
      <div className="title-top-10-valor">
        <p>Top 5 clientes que mais consumiram <b>em valor</b>.</p>
      </div>
      <TableComponent clientes={clientesMaisConsumiramValor} />

      {/* Por gênero */}
      <div className="title-top-10-valor">
        <p>Clientes agrupados por <b>gênero</b>.</p>
      </div>
      <TableComponent clientes={clientesPorGenero} />

      {/* Produtos mais consumidos */}
      <div className="title-top-10-valor">
        <p>Produtos mais consumidos <b>(geral e por gênero)</b>.</p>
      </div>
      <SimpleTable data={produtosMaisConsumidos} tipo="Produto" />

      {/* Serviços mais consumidos */}
      <div className="title-top-10-valor">
        <p>Serviços mais consumidos <b>(geral e por gênero)</b>.</p>
      </div>
      <SimpleTable data={servicosMaisConsumidos} tipo="Serviço" />
    </div>
  );
};

// TableComponent e SimpleTable já são componentes de função, então não precisam de modificação.
function TableComponent({ clientes }: { clientes: Cliente[] }) {
  return (
    <div className="table-component-listagem" role="region" tabIndex={0}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            {clientes[0]?.genero && <th>Gênero</th>}
            <th>Produtos</th>
            <th>Serviços</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              {cliente.genero && <td>{cliente.genero}</td>}
              <td>{cliente.produto}</td>
              <td>{cliente.servico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SimpleTable({ data, tipo }: { data: ProdutoServico[]; tipo: string }) {
  return (
    <div className="table-component-listagem" role="region" tabIndex={0}>
      <table>
        <thead>
          <tr>
            <th>{tipo}</th>
            <th>Quantidade</th>
            {data[0]?.genero && <th>Gênero</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              {item.genero && <td>{item.genero}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstatisticaPage;