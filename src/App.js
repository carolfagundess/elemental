import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Grupo from "./componentes/Grupo";
import Personagem from "./componentes/Personagem";

function App() {
  const grupos = [
    {
      nome: "Jedi",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Kenobi",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Fett",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Hutt",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Mandalorian",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Sith",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const inicial = [
    {
      nome: "Luke Skywalker",
      ator: "Mark Hamill",
      imagem:
        "https://galaxysabers.co.uk/cdn/shop/articles/Luke_Skywalker_Blog_compressed.png?v=1707421636&width=1024",
      grupo: "Jedi",
    },
    {
      nome: "Anakin Skywalker",
      ator: "Hayden Christensen",
      imagem:
        "https://pm1.aminoapps.com/8446/548da3e0e260b6574972802ceed0959e7b428b5br1-736-736v2_00.jpg",
      grupo: "Jedi",
    },
    {
      nome: "Darth Vader",
      ator: "James Earl Jones (voz)",
      imagem:
        "https://nsabers.es/cdn/shop/articles/celehey_Generate_an_image_of_Darth_Vader_standing_in_a_dark_o_b4b944ee-2afc-425b-b707-e95eb776c395_1.png?v=1710756391",
      grupo: "Sith",
    },
    {
      nome: "Obi-Wan Kenobi",
      ator: "Ewan McGregor",
      imagem:
        "https://media.vogue.fr/photos/606dca7e47f477da2ff11fcf/1:1/w_2032,h_2032,c_limit/010_A7A08C89_416.jpg",
      grupo: "Jedi",
    },
    {
      nome: "Boba Fett",
      ator: "Temuera Morrison",
      imagem:
        "https://i.pinimg.com/736x/54/d1/02/54d1029f78d49d4add4e628030620fee.jpg",
      grupo: "Mandalorian",
    },
    {
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

  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map((grupo) => grupo.nome)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemCadastrado(personagem)
        }
      />

      {grupos.map((grupo) => (
        <Grupo
          key={grupo.nome}
          nome={grupo.nome}
          corPrimaria={grupo.corPrimaria}
          corSecundaria={grupo.corSecundaria}
          personagens={personagens.filter(
            (personagem) => personagem.grupo === grupo.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
