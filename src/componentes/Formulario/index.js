import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

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

  const salvar = (evento) => {
    evento.preventDefault();
    console.log('Foi submetido');
  };

  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do Star Wars</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="o nome do personagem" />
        <CampoTexto obrigatorio={true} label="Ator" placeholder="o nome do ator" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Agrupamento" itens={grupos} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
