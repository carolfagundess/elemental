import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Grupo from "./componentes/Grupo";

function App() {
  const grupos = [
    {
      nome: "Skywalker",
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
      nome: "Jedi",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Sith",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemCadastrado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario grupos={grupos.map(grupo => grupo.nome)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemCadastrado(personagem)
        }
      />

      {grupos.map((grupo) => (
        <Grupo key={grupo.nome} nome={grupo.nome} corPrimaria={grupo.corPrimaria} corSecundaria={grupo.corSecundaria} />
      ))}
    </div>
  );
}

export default App;
