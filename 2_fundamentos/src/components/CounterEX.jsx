import { useState } from 'react'

function CounterEX() {

    const [cont, setCont] = useState(0)

  return (
    <div>
        <button onClick={() => setCont(cont+1)}>Clique aqui</button>
        <p>Você clicou {cont} vezes</p>
    </div>
  )
}

export default CounterEX