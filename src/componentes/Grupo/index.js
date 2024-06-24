import Personagem from "../Personagem";
import "./Grupo.css";

//recebemos props como parametro
const Grupo = (props) => {
  return props.personagens.length > 0 ? (
    <section className="grupo" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="personagens">
        {props.personagens.map((personagem) => (
          <Personagem
            corDeFundo={props.corPrimaria}
            key={personagem.nome}
            nome={personagem.nome}
            ator={personagem.ator}
            imagem={personagem.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Grupo;