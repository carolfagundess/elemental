import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Grupo from "./componentes/Grupo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [grupos, setGrupos] = useState([
    {
      id: uuidv4(),
      nome: "Jedi",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Aliança Rebelde",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "República Galáctica",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Resistência",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "Sith",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      id: uuidv4(),
      nome: "Império Galáctico",
      corPrimaria: "#1F1F1F",
      corSecundaria: "#B1B1B1",
    },
    {
      id: uuidv4(),
      nome: "Primeira Ordem",
      corPrimaria: "#900C3F",
      corSecundaria: "#F0B7A4",
    },
    {
      id: uuidv4(),
      nome: "Separatistas",
      corPrimaria: "#4B9CD3",
      corSecundaria: "#E2F3FA",
    },
    {
      id: uuidv4(),
      nome: "Caçadores de Recompensas",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mandalorianos",
      corPrimaria: "#8E44AD",
      corSecundaria: "#DCC6E0",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "Luke Skywalker",
      ator: "Mark Hamill",
      imagem:
        "https://galaxysabers.co.uk/cdn/shop/articles/Luke_Skywalker_Blog_compressed.png?v=1707421636&width=1024",
      grupo: "Jedi",
    },
    {
      id: uuidv4(),
      nome: "Anakin Skywalker",
      ator: "Hayden Christensen",
      imagem:
        "https://pm1.aminoapps.com/8446/548da3e0e260b6574972802ceed0959e7b428b5br1-736-736v2_00.jpg",
      grupo: "Jedi",
    },
    {
      id: uuidv4(),
      nome: "Darth Vader",
      ator: "James Earl Jones (voz)",
      imagem:
        "https://nsabers.es/cdn/shop/articles/celehey_Generate_an_image_of_Darth_Vader_standing_in_a_dark_o_b4b944ee-2afc-425b-b707-e95eb776c395_1.png?v=1710756391",
      grupo: "Sith",
    },
    {
      id: uuidv4(),
      nome: "Obi-Wan Kenobi",
      ator: "Ewan McGregor",
      imagem:
        "https://media.vogue.fr/photos/606dca7e47f477da2ff11fcf/1:1/w_2032,h_2032,c_limit/010_A7A08C89_416.jpg",
      grupo: "Jedi",
    },
    {
      id: uuidv4(),
      nome: "Boba Fett",
      ator: "Temuera Morrison",
      imagem:
        "https://i.pinimg.com/736x/54/d1/02/54d1029f78d49d4add4e628030620fee.jpg",
      grupo: "Caçadores de Recompensas",
    },
    {
      id: uuidv4(),
      nome: "Darth Maul",
      ator: "Ray Park",
      imagem:
        "https://nsabers.com/cdn/shop/articles/rogue_0ne_photo_realistic_Star_Wars_darth_maul_black_cloak_inti_3026af25-54be-4505-8c2a-9615fdfd7b7a.png?v=1713855939",
      grupo: "Sith",
    },
  ];

  const [personagens, setPersonagens] = useState(inicial);

  const aoNovoPersonagemCadastrado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  function deletarPersonagem(id) {
    setPersonagens(personagens.filter((personagem) => personagem.id !== id));
  }

  function mudarCorGrupo(cor, nome) {
    setGrupos(
      grupos.map((grupo) => {
        if (grupo.nome === nome) {
          grupo.corPrimaria = cor;
        }
        return grupo;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map((grupo) => grupo.nome)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemCadastrado(personagem)
        }
      />

      {grupos.map((grupo, indice) => {
        return (
          <Grupo
            key={indice}
            nome={grupo.nome}
            corPrimaria={grupo.corPrimaria}
            corSecundaria={grupo.corSecundaria}
            personagens={personagens.filter(
              (personagem) => personagem.grupo === grupo.nome
            )}
            aoDeletar={deletarPersonagem}
            mudarCor={mudarCorGrupo}
          />
        );
      })}
    </div>
  );
}

export default App;
