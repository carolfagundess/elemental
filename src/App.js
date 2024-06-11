import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Personagem" placeholder="nome do personagem"/>
      <CampoTexto label="Ator" placeholder="nome do ator"/>
      <CampoTexto label="Imagem" placeholder="endereço da imagem"/>
    </div>
  );
}

export default App;
