import {useState, useMemo} from 'react'

function Ex2() {
    const [numero, setNumero] = useState(0);

    const fibonacci = (n) => {
        if(n <= 1){
            return n
        }

        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    const calculo = useMemo(() => fibonacci(numero), [numero]);

  return (
    <div>
        <h2>Ex2</h2>
        <p>O calculo de {numero} é {calculo}</p>
        <input 
            type="number"
            placeholder="Digite um número aqui"
            value={numero}
            onChange={(e) => setNumero(parseInt(e.target.value))}
        />
    </div>
  )
}

export default Ex2