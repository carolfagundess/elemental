import "./Personagem.css";

//desestruturou o props
const Personagem = ({ nome, imagem, ator, corDeFundo, aoDeletar }) => {
  return (
    <div className="personagem">
      <div className="deletar" onClick={aoDeletar}>
        deletar
      </div>
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{ator}</h5>
      </div>
    </div>
  );
};

export default Personagem;
