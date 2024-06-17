import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const clas = [
    "Selecione um clã",
    "Skywalker",
    "Kenobi",
    "Fett",
    "Hutt",
    "Mandalorian",
    "Jedi",
    "Sith",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Star Wars</h2>
        <CampoTexto label="Nome" placeholder="o nome do personagem" />
        <CampoTexto label="Ator" placeholder="o nome do ator" />
        <CampoTexto label="Imagem" placeholder="o endereço da imagem" />
        <ListaSuspensa label="Clãs" itens={clas} />
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
