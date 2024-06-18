import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = () => {
  const grupos = [
    "Selecione um grupo",
    "Skywalker",
    "Kenobi",
    "Fett",
    "Hutt",
    "Mandalorian",
    "Jedi",
    "Sith",
  ];

  const [nome, setNome] = useState("");
  const [ator, setAtor] = useState("");
  const [imagem, setImagem] = useState("");

  const salvar = (evento) => {
    evento.preventDefault();
    console.log("Foi submetido", nome, ator, imagem);
  };

  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do Star Wars</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="o nome do personagem"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Ator"
          placeholder="o nome do ator"
          valor={ator}
          aoAlterar={(valor) => setAtor(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa obrigatorio={true} label="Agrupamento" itens={grupos} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
