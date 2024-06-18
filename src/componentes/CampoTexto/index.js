//importar css
import "./CampoTexto.css";

//arrow function, variavel com letra maiuscula por ser um componente react
const CampoTexto = (props) => {
  const placeholder = `Digite ${props.placeholder}...`;

  let valor = "Carolina";

  const digitar = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={digitar}
        required={props.obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
