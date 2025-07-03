import { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`O contador está com o valor de ${count}`);
    }, [count])

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Aumentar</button>
    </div>
  )
}

export default Counter