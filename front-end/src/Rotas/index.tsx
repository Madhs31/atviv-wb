import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Produto from '../pages/Produtos';
import Servico from '../pages/Servicos';
import Cliente from '../pages/Cliente';
import CadastroCliente from '../pages/CadastrarCliente';
import CadastroServico from '../pages/CadastrarServico';
import CadastroProduto from '../pages/CadastrarProduto';
import EstatisticaPage from '../pages/Estatisticas';

const temaGlobal = 'purple lighten-1'; // Exemplo de tema para passar

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Header tema={temaGlobal} />
      <Routes>
        <Route path="/" element={<Home tema={temaGlobal} />} />
        <Route path="/produto" element={<Produto/>} />
        <Route path="/servico" element={<Servico/>} />
        <Route path="/cliente" element={<Cliente/>} />
        <Route path="/cadastrocliente" element={<CadastroCliente/>} />
        <Route path="/cadastroservico" element={<CadastroServico/>} />
        <Route path="/cadastroproduto" element={<CadastroProduto/>} />
        <Route path="/estatistica" element={<EstatisticaPage/>} />
      </Routes>
      <Footer tema={temaGlobal} />
    </BrowserRouter>
  );
}

export default RouterApp;