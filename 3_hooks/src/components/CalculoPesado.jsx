import { useMemo } from 'react'

function CalculoPesado({ numero }) {

    const resultadoCalculoPesado = useMemo(() => {
        return operacaoPesada(numero)
    }, [numero]);

  return (
    <div>Resultado: {resultadoCalculoPesado}</div>
  )
}

const operacaoPesada = (num) => {
    console.log("Realizando operação pesada")
    return num * 1000;
}

export default CalculoPesado