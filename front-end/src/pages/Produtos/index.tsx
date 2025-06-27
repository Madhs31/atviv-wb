import React, { useState } from "react"; // Importe useState
// import "./style.css"; // Assumindo que este arquivo CSS existe e está no mesmo diretório
import { Link } from "react-router-dom";

interface IProduto {
  id: string;
  nomeProd: string;
  descricao: string;
  valor: number;
}

const Produto: React.FC = () => {
  // Use useState para gerenciar o estado 'produtos'
  const [produtos] = useState<IProduto[]>([
    {
      id: "P1",
      nomeProd: "Sérum Iluminador com Pérolas de Ouro",
      descricao: "Ilumina e revitaliza a pele com toque de luxo",
      valor: 129.90,
    },
    {
      id: "P2",
      nomeProd: "Creme Anti-Idade com Peptídeos Inteligentes",
      descricao: "Atua nos sinais do tempo com alta tecnologia",
      valor: 159.00,
    },
    {
      id: "P3",
      nomeProd: "Gel de Limpeza Facial com Carvão Ativado",
      descricao: "Desintoxica e purifica profundamente a pele",
      valor: 49.90,
    },
    {
      id: "P4",
      nomeProd: "Óleo Facial Nutritivo com Rosa Mosqueta",
      descricao: "Nutre e regenera peles secas e sensíveis",
      valor: 69.90,
    },
    {
      id: "P5",
      nomeProd: "Bálsamo Multifuncional para Lábios e Cutículas",
      descricao: "Hidratação intensa para áreas ressecadas",
      valor: 32.00,
    },
    {
      id: "P6",
      nomeProd: "Creme Corporal Firmador com Cafeína",
      descricao: "Melhora a firmeza da pele e combate a flacidez",
      valor: 89.90,
    },
    {
      id: "P7",
      nomeProd: "Solução Tônica Adstringente com Hamamélis",
      descricao: "Controla a oleosidade e fecha os poros",
      valor: 45.00,
    },
    {
      id: "P8",
      nomeProd: "Creme para Mãos com Vitamina E e Proteção UV",
      descricao: "Protege e hidrata com ação antioxidante",
      valor: 35.50,
    },
    {
      id: "P9",
      nomeProd: "Ampola Capilar de Brilho Instantâneo",
      descricao: "Tratamento rápido para brilho e maciez",
      valor: 19.90,
    },
    {
      id: "P10",
      nomeProd: "Sabonete Íntimo com Prebióticos Naturais",
      descricao: "Equilibra o pH e fortalece a flora íntima",
      valor: 29.90,
    },
    {
      id: "P11",
      nomeProd: "Esfoliante Corporal com Sementes de Damasco",
      descricao: "Remove células mortas com esfoliação natural",
      valor: 49.00,
    },
    {
      id: "P12",
      nomeProd: "Mousse de Limpeza Facial com Colágeno",
      descricao: "Limpa suavemente enquanto revitaliza",
      valor: 54.90,
    },
    {
      id: "P13",
      nomeProd: "Máscara Noturna de Hidratação Profunda",
      descricao: "Recupera a pele durante o sono",
      valor: 79.00,
    },
    {
      id: "P14",
      nomeProd: "Creme para Pés com Ureia 10%",
      descricao: "Suaviza rachaduras e hidrata intensamente",
      valor: 39.90,
    },
    {
      id: "P15",
      nomeProd: "Spray Finalizador com Efeito Gloss",
      descricao: "Finalização com brilho luminoso sem pesar",
      valor: 44.90,
    },
    {
      id: "P16",
      nomeProd: "Shampoo Detox com Carvão Vegetal",
      descricao: "Limpeza profunda sem agredir os fios",
      valor: 59.00,
    },
    {
      id: "P17",
      nomeProd: "Leave-in Reconstrutor com Queratina",
      descricao: "Fortalece e protege os fios do calor",
      valor: 62.00,
    },
    {
      id: "P18",
      nomeProd: "Hidratante Facial com Filtro Solar FPS 20",
      descricao: "Protege contra o sol e hidrata ao mesmo tempo",
      valor: 74.90,
    },
    {
      id: "P19",
      nomeProd: "Bruma Corporal Perfumada com Flor de Laranjeira",
      descricao: "Perfume suave e refrescância prolongada",
      valor: 38.00,
    },
    {
      id: "P20",
      nomeProd: "Óleo Bifásico Hidratante com Amêndoas Doces",
      descricao: "Nutrição intensa com toque seco",
      valor: 58.00,
    },
  ]);
  // Use useState para gerenciar o estado 'filtro'
  const [filtro, setFiltro] = useState("");

  // Função para filtrar produtos
  const filtrarProdutos = (produtos: IProduto[], currentFiltro: string): IProduto[] => {
    if (!currentFiltro) return produtos;
    return produtos.filter(
      (produto) =>
        produto.id.toLowerCase().includes(currentFiltro.toLowerCase()) ||
        produto.nomeProd.toLowerCase().includes(currentFiltro.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(currentFiltro.toLowerCase())
    );
  };

  // Função para manipular a mudança no campo de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const produtosFiltrados = filtrarProdutos(produtos, filtro);

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Produtos</h2>
        <div className="search-session">
          {/* Adicione um input de busca aqui, se desejar, como em Cliente.tsx */}
          {/* <input
            type="text"
            placeholder="Buscar produto por ID, nome ou descrição"
            value={filtro}
            onChange={handleSearchChange}
            className="search-input"
          /> */}
          <Link to="/cadastroproduto" style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Produto</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="table-component" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProd}</td>
                <td>{produto.descricao}</td>
                <td>
                  R$ {produto.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produto;