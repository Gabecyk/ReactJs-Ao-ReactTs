import React, { useState,useCallback } from 'react'

// Memorizar componentes
const Botao = React.memo(({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>
}) 

function ContadorCallback() {
    const [contador, setContador] = useState(0);

    const incrementar = useCallback(() => {
        setContador((contadorAnterior) => contadorAnterior + 1)
    }, []);

  return (
    <div>
        <p>Contagem: {contador}</p>
        <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  )
}

export default ContadorCallback