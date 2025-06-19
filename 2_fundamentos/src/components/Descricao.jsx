const Descricao = (props) =>{
    return(
        <div>
            <p>Seu nome é: {props.nome}!</p>
            <p>E você tem {props.idade} anos!</p>
        </div>
    )
}

export default Descricao;