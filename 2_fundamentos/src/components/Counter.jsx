import { useState } from 'react'

function Counter() {
    //Consultar e alterar
    const [count, setCount] = useState(0);

    //Variaveis não re-renderizam componente

  return (
    <div>
        <p>Você clicou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
    
  )
}

export default Counter