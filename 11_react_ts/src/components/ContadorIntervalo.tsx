import React, { useState } from 'react'
import useInterval from '../hooks/useInterval'
import { useContador } from '../hooks/useContador';

const ContadorIntervalo: React.FC = () => {

    const [contador, setContador] = useState<number>(0);
    const { count, incrementar, decrementar, resetar } = useContador(10);

    useInterval(() => {
        setContador((prev) => prev + 1);
    }, 5000);

    return (
        <div>
            <h3>{contador}</h3>
            <h2>Contador: {count}</h2>
            <button onClick={incrementar}>+1</button>
            <button onClick={decrementar}>-1</button>
            <button onClick={resetar}>Resetar</button>
        </div>
    )
}

export default ContadorIntervalo