package com.wb.wbbackend.entidades;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.springframework.hateoas.RepresentationModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Cliente extends RepresentationModel<Cliente> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;

	@Column
	private String sobreNome;

	@Column
	private String email;

	@Column
	private String cpf; // <-- Campo adicionado aqui

	@Column
	private String genero; // <-- Já adicione aqui o campo 'gênero' também

	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	private Endereco endereco;

	@OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Telefone> telefones = new ArrayList<>();
}
