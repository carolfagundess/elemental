import './Grupo.css'

//recebemos props como parametro
const Grupo = (props) => {
    return (
        <section className='grupo' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderBottomColor: props.corPrimaria}} >{props.nome}</h3>
        </section>
    )
}

export default Grupo