import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:32832",
});

export const cadastrarCliente = (cliente: any) =>
  api.post("/cliente/cadastrar", cliente);
export const excluirCliente = (id: string) => api.delete(`/cliente/excluir?id=${id}`);
export const atualizarCliente = (cliente: any) => api.put("/cliente/atualizar", cliente);
