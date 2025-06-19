import { useState, useEffect } from 'react'

function Timer() {
    const [segundos, setSegundos] = useState(0);

    // setIntervel, setTimeout
    useEffect(() => {
        const intervalid = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        // limpeza de estado
        return () => clearInterval(intervalid)
    }, [segundos]); // array dependencias vazio

  return (
    <div>Timer: {segundos} segundos.</div>
  )
}

export default Timer