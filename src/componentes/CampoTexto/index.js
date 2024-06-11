//importar css
import "./CampoTexto.css";

//arrow function, variavel com letra maiuscula por ser um componente react
const CampoTexto = (propos) => {
  const placeholder = `Digite o ${propos.placeholder}...`
  return (
    <div className="campo-texto">
      <label>{propos.label}</label>
      <input placeholder={placeholder}/>
    </div>
  );
};

export default CampoTexto;
