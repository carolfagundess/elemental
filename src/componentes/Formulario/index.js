import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Star Wars</h2>
        <CampoTexto label="Personagem" placeholder="o nome do personagem" />
        <CampoTexto label="Ator" placeholder="o nome do ator" />
        <CampoTexto label="Filme" placeholder="um filme deste personagem" />
        <CampoTexto label="Imagem" placeholder="o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
