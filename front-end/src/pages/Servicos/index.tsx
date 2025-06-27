import React, { useState } from "react"; // Importe useState
// import "./style.css"; // Assumindo que este arquivo CSS existe e está no mesmo diretório
import { Link } from "react-router-dom";

interface IServico {
  id: string;
  nomeServ: string;
  descricao: string;
  valor: number;
}

const Servico: React.FC = () => {
  // Use useState para gerenciar o estado 'servicos'
  const [servicos] = useState<IServico[]>([
    {
      id: "S1",
      nomeServ: "Hidratação Facial com Máscara de Ouro",
      descricao: "Tratamento de luxo que nutre profundamente a pele facial",
      valor: 120,
    },
    {
      id: "S2",
      nomeServ: "Massagem Relaxante com Aromaterapia",
      descricao: "Massagem com óleos essenciais para alívio do estresse",
      valor: 150,
    },
    {
      id: "S3",
      nomeServ: "Tratamento de Crescimento Capilar com Dermapen",
      descricao: "Estimulação do couro cabeludo para crescimento saudável",
      valor: 200,
    },
    {
      id: "S4",
      nomeServ: "Escova Modeladora com Finalização a Frio",
      descricao: "Modelagem capilar com proteção térmica e brilho",
      valor: 90,
    },
    {
      id: "S5",
      nomeServ: "Terapia de Ozônio para Couro Cabeludo",
      descricao: "Tratamento antisséptico que revitaliza o couro cabeludo",
      valor: 110,
    },
    {
      id: "S6",
      nomeServ: "Depilação Egípcia com Linha",
      descricao: "Técnica precisa e menos agressiva para a pele",
      valor: 70,
    },
    {
      id: "S7",
      nomeServ: "Banho de Lua com Hidratação Corporal",
      descricao: "Clareamento de pelos com cuidado hidratante",
      valor: 100,
    },
    {
      id: "S8",
      nomeServ: "Peeling de Diamante com Clareamento",
      descricao: "Esfoliação profunda que melhora o tom da pele",
      valor: 180,
    },
    {
      id: "S9",
      nomeServ: "Limpeza Energizante com Argila Verde",
      descricao: "Desintoxicação facial com propriedades naturais",
      valor: 85,
    },
    {
      id: "S10",
      nomeServ: "Maquiagem Profissional para Eventos",
      descricao: "Maquiagem sofisticada para ocasiões especiais",
      valor: 130,
    },
    {
      id: "S11",
      nomeServ: "Tratamento para Olheiras com Laser de Baixa Frequência",
      descricao: "Redução de olheiras e revitalização da região dos olhos",
      valor: 140,
    },
    {
      id: "S12",
      nomeServ: "Spa dos Pés com Escalda Aromático",
      descricao: "Relaxamento completo com essências terapêuticas",
      valor: 75,
    },
    {
      id: "S13",
      nomeServ: "Design de Barba com Toalha Quente",
      descricao: "Modelagem precisa com toque relaxante",
      valor: 60,
    },
    {
      id: "S14",
      nomeServ: "Clareamento de Axilas com Ácidos Naturais",
      descricao: "Tratamento seguro e eficaz para uniformizar o tom",
      valor: 95,
    },
    {
      id: "S15",
      nomeServ: "Massagem Antiestresse com Velas Quentes",
      descricao: "Terapia corporal relaxante com velas aromáticas",
      valor: 160,
    },
    {
      id: "S16",
      nomeServ: "Aplicação de BB Glow Facial",
      descricao: "Pele iluminada e uniforme sem maquiagem",
      valor: 190,
    },
    {
      id: "S17",
      nomeServ: "Revitalização Capilar com Blend de Óleos",
      descricao: "Nutrição intensa para cabelos danificados",
      valor: 115,
    },
    {
      id: "S18",
      nomeServ: "Alinhamento Capilar Orgânico",
      descricao: "Tratamento natural para fios mais lisos e saudáveis",
      valor: 220,
    },
    {
      id: "S19",
      nomeServ: "Tratamento de Queda Capilar com Alta Frequência",
      descricao: "Estimulação que fortalece os fios e combate a queda",
      valor: 145,
    },
    {
      id: "S20",
      nomeServ: "Esfoliação Corporal com Açúcar Mascavo e Mel",
      descricao: "Remoção de células mortas com ingredientes naturais",
      valor: 95,
    },
  ]);
  // Use useState para gerenciar o estado 'filtro'
  const [filtro, setFiltro] = useState("");

  // Função para filtrar serviços
  const filtrarServicos = (servicos: IServico[], currentFiltro: string): IServico[] => {
    if (!currentFiltro) return servicos;
    return servicos.filter(
      (servico) =>
        servico.id.toLowerCase().includes(currentFiltro.toLowerCase()) ||
        servico.nomeServ.toLowerCase().includes(currentFiltro.toLowerCase()) ||
        servico.descricao.toLowerCase().includes(currentFiltro.toLowerCase())
    );
  };

  // Função para manipular a mudança no campo de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const servicosFiltrados = filtrarServicos(servicos, filtro);

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Serviços</h2>
        <div className="search-session">
          {/* Adicione um input de busca aqui, se desejar, como em Cliente.tsx */}
          {/* <input
            type="text"
            placeholder="Buscar serviço por ID, nome ou descrição"
            value={filtro}
            onChange={handleSearchChange}
            className="search-input"
          /> */}
          <Link to="/cadastroservico" style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Serviço</span>
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
            {servicosFiltrados.map((servico) => (
              <tr key={servico.id}>
                <td>{servico.id}</td>
                <td>{servico.nomeServ}</td>
                <td>{servico.descricao}</td>
                <td>
                  R$ {servico.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servico;