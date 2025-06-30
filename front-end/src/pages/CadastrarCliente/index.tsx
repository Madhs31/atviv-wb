import { useState } from "react";
import "./style.css";
import { cadastrarCliente } from "../../services/clienteService";

const CadastroCliente = () => {
  const [form, setForm] = useState({
    nome: "",
    sobreNome: "",
    email: "",
    genero: "",
    cpf: "",
    rg: "",
    descricao: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      codigoPostal: "",
      informacoesAdicionais: "",
    },
    telefones: [
      {
        ddd: "",
        numero: "",
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("endereco")) {
      // Exemplo: name = "endereco.estado"
      const enderecoField = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        endereco: { ...prev.endereco, [enderecoField]: value },
      }));
    } else if (name.startsWith("telefones")) {
      // Exemplo: name = "telefones.0.ddd"
      const parts = name.split(".");
      const telefoneIndex = parseInt(parts[1]);
      const telefoneField = parts[2];
      setForm((prev) => {
        const updatedTelefones = [...prev.telefones];
        updatedTelefones[telefoneIndex] = {
          ...updatedTelefones[telefoneIndex],
          [telefoneField]: value,
        };
        return { ...prev, telefones: updatedTelefones };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples para telefone
    if (!form.telefones[0].ddd.trim() || !form.telefones[0].numero.trim()) {
      alert("Por favor, preencha o DDD e o número do telefone.");
      return;
    }

    // Aqui você pode incluir outras validações, como CPF válido, e-mail válido, etc.

    try {
      await cadastrarCliente(form);
      alert("Cliente cadastrado com sucesso!");
      // Resetar formulário
      setForm({
        nome: "",
        sobreNome: "",
        email: "",
        genero: "",
        cpf: "",
        rg: "",
        descricao: "",
        endereco: {
          estado: "",
          cidade: "",
          bairro: "",
          rua: "",
          numero: "",
          codigoPostal: "",
          informacoesAdicionais: "",
        },
        telefones: [
          {
            ddd: "",
            numero: "",
          },
        ],
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar cliente.");
    }
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
            name="nome"
            type="text"
            placeholder="Digite o nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <p>Sobrenome:</p>
          <input
            name="sobreNome"
            type="text"
            placeholder="Digite o sobrenome"
            value={form.sobreNome}
            onChange={handleChange}
            required
          />

          <p>Email:</p>
          <input
            name="email"
            type="email"
            placeholder="Digite o e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <p>Gênero:</p>
          <input
            name="genero"
            type="text"
            placeholder="Digite o gênero"
            value={form.genero}
            onChange={handleChange}
          />

          <p>CPF:</p>
          <input
            name="cpf"
            type="text"
            placeholder="Digite o CPF"
            value={form.cpf}
            onChange={handleChange}
          />

          <p>RG:</p>
          <input
            name="rg"
            type="text"
            placeholder="Digite o RG"
            value={form.rg}
            onChange={handleChange}
          />

          <p>Descrição:</p>
          <input
            name="descricao"
            type="text"
            placeholder="Digite uma descrição"
            value={form.descricao}
            onChange={handleChange}
          />

          <h3>Endereço</h3>
          <p>Estado:</p>
          <input
            name="endereco.estado"
            type="text"
            value={form.endereco.estado}
            onChange={handleChange}
            required
          />

          <p>Cidade:</p>
          <input
            name="endereco.cidade"
            type="text"
            value={form.endereco.cidade}
            onChange={handleChange}
            required
          />

          <p>Bairro:</p>
          <input
            name="endereco.bairro"
            type="text"
            value={form.endereco.bairro}
            onChange={handleChange}
          />

          <p>Rua:</p>
          <input
            name="endereco.rua"
            type="text"
            value={form.endereco.rua}
            onChange={handleChange}
          />

          <p>Número:</p>
          <input
            name="endereco.numero"
            type="text"
            value={form.endereco.numero}
            onChange={handleChange}
            required
          />

          <p>CEP:</p>
          <input
            name="endereco.codigoPostal"
            type="text"
            value={form.endereco.codigoPostal}
            onChange={handleChange}
          />

          <p>Informações adicionais:</p>
          <input
            name="endereco.informacoesAdicionais"
            type="text"
            value={form.endereco.informacoesAdicionais}
            onChange={handleChange}
          />

          <h3>Telefone</h3>
          <p>DDD:</p>
          <input
            name="telefones.0.ddd"
            type="text"
            placeholder="DDD"
            value={form.telefones[0].ddd}
            onChange={handleChange}
            required
          />

          <p>Telefone:</p>
          <input
            name="telefones.0.numero"
            type="text"
            placeholder="Número"
            value={form.telefones[0].numero}
            onChange={handleChange}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
