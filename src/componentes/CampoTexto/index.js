//importar css
import "./CampoTexto.css";

//arrow function, variavel com letra maiuscula por ser um componente react
const CampoTexto = (props) => {
  const placeholder = `Digite ${props.placeholder}...`;

  const digitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={digitar}
        required={props.obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
