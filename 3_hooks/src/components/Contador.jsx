import { useReducer } from 'react'

//Definição estado inicial
const estadoInical = { contador: 0 };

// Função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {

    switch(acao.tipo){
        case "incrementar":
            return {contador: estado.contador + 1};
        case "decrementar":
            return {contador: estado.contador - 1}
        case "resetar":
            return {contador: 0}
        default:
            throw new Error("Ação não suportada");
    }

}

function Contador() {

    // inicializar o useReducer com estado inicial e função modificadora
    const [estado, dispatch] = useReducer(reducer, estadoInical)

  return (
    <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({tipo: "incrementar"})}>Incrementar</button>
        <button onClick={() => dispatch({tipo: "decrementar"})}>Incrementar</button>
        <button onClick={() => dispatch({tipo: "resetar"})}>Incrementar</button>
    </div>
  )
}

export default Contador